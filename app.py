from flask import Flask, jsonify, render_template, redirect, url_for, session
from database import db
from dotenv import load_dotenv
from urllib.parse import quote_plus
from flask_bcrypt import Bcrypt
from flask_mail import Mail
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import os
from functools import wraps

load_dotenv()

app = Flask(__name__)

password = quote_plus(os.getenv('MYSQL_PASSWORD'))

app.config['SQLALCHEMY_DATABASE_URI'] = (
    f"mysql+pymysql://{os.getenv('MYSQL_USER')}:{password}"
    f"@{os.getenv('MYSQL_HOST')}/{os.getenv('MYSQL_DB')}"
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

secret = os.getenv('SECRET_KEY')
if not secret:
    raise RuntimeError("SECRET_KEY is not set!")
app.config['SECRET_KEY'] = secret

app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
app.config['PERMANENT_SESSION_LIFETIME'] = 3600

db.init_app(app)

bcrypt = Bcrypt(app)

limiter = Limiter(get_remote_address, app=app, default_limits=["200 per day", "50 per hour"])

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')

mail = Mail(app)

from routes.books import books_bp
from routes.contact import contact_bp
from routes.admin import admin_bp

app.register_blueprint(books_bp)
app.register_blueprint(contact_bp)
app.register_blueprint(admin_bp)

@app.after_request
def add_no_cache(response):
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

@app.after_request
def add_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'SAMEORIGIN'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    return response

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/book/<int:book_id>')
def book(book_id):
    return render_template('book.html', book_id=book_id)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.route('/admin/login')
def admin_login_page():
    return render_template('admin/login.html')

def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not session.get('admin'):
            return redirect(url_for('admin_login_page'))
        return f(*args, **kwargs)
    return decorated

@app.route('/admin/dashboard')
@login_required
def admin_dashboard_page():
    return render_template('admin/dashboard.html')

@app.route('/api/banners')
def get_banners_public():
    from models import Banner
    banners = Banner.query.order_by(Banner.id.asc()).all()
    return jsonify([b.to_dict() for b in banners])

if __name__ == '__main__':
    app.run(debug=os.getenv('FLASK_DEBUG', 'False') == 'True')