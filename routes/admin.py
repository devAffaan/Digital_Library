from flask import Blueprint, request, jsonify, session
from models import Book, Admin
from database import db
from functools import wraps
from flask_bcrypt import Bcrypt
import os
from werkzeug.utils import secure_filename
from datetime import datetime

admin_bp = Blueprint('admin', __name__)
bcrypt = Bcrypt()

ALLOWED_IMAGES = {'png', 'jpg', 'jpeg', 'gif', 'webp'}
ALLOWED_PDFS = {'pdf'}

def allowed_image(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_IMAGES

def allowed_pdf(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_PDFS

def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not session.get('admin'):
            return jsonify({'message': 'Please login first!'}), 401
        return f(*args, **kwargs)
    return decorated


@admin_bp.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.get_json()
    admin = Admin.query.filter_by(username=data['username']).first()

    if admin and bcrypt.check_password_hash(admin.password, data['password']):
        session['admin'] = True
        return jsonify({'message': 'Login successful!'})

    return jsonify({'message': 'Wrong username or password!'}), 401

@admin_bp.route('/api/admin/books', methods=['POST'])
@login_required
def add_book():
    title       = request.form.get('title')
    author      = request.form.get('author')
    category    = request.form.get('category')
    description = request.form.get('description', '')
    download_enabled = int(request.form.get('download_enabled', 1))
    cover_file  = request.files.get('cover_image')
    pdf_file    = request.files.get('pdf_path')

    if not title or not author or not category:
        return jsonify({'message': 'Title, author and category required!'}), 400

    cover_path = ''
    if cover_file and allowed_image(cover_file.filename):
        filename = secure_filename(cover_file.filename)
        cover_file.save(os.path.join('static', 'images', filename))
        cover_path = f'images/{filename}'

    pdf_path = ''
    if pdf_file and allowed_pdf(pdf_file.filename):
        filename = secure_filename(pdf_file.filename)
        pdf_file.save(os.path.join('static', 'pdfs', filename))
        pdf_path = f'pdfs/{filename}'

    new_book = Book(
        title=title,
        author=author,
        category=category,
        cover_image=cover_path,
        pdf_path=pdf_path,
        description=description,
        created_at=datetime.utcnow(),
        download_enabled=download_enabled
)
    db.session.add(new_book)
    db.session.commit()

    return jsonify({'message': 'Book added successfully!'})

@admin_bp.route('/api/admin/books/<int:book_id>', methods=['DELETE'])
@login_required
def delete_book(book_id):
    book = Book.query.get_or_404(book_id)
    db.session.delete(book)
    db.session.commit()
    return jsonify({'message': 'Book deleted!'})

@admin_bp.route('/api/admin/books/<int:book_id>/toggle-download', methods=['POST'])
@login_required
def toggle_download(book_id):
    book = Book.query.get_or_404(book_id)
    book.download_enabled = 0 if book.download_enabled else 1
    db.session.commit()
    return jsonify({
        'message': 'Updated successfully',
        'download_enabled': book.download_enabled
    })


@admin_bp.route('/api/admin/banners', methods=['GET'])
@login_required
def get_banners():
    from models import Banner
    banners = Banner.query.order_by(Banner.id.desc()).all()
    return jsonify([b.to_dict() for b in banners])

@admin_bp.route('/api/admin/banners', methods=['POST'])
@login_required
def add_banner():
    from models import Banner
    banner_file = request.files.get('banner_image')
    if not banner_file or not allowed_image(banner_file.filename):
        return jsonify({'message': 'Valid image required!'}), 400
    filename = secure_filename(banner_file.filename)
    banner_file.save(os.path.join('static', 'images', filename))
    banner = Banner(image_path=f'images/{filename}')
    db.session.add(banner)
    db.session.commit()
    return jsonify({'message': 'Banner added!'})

@admin_bp.route('/api/admin/banners/<int:banner_id>', methods=['DELETE'])
@login_required
def delete_banner(banner_id):
    from models import Banner
    banner = Banner.query.get_or_404(banner_id)
    db.session.delete(banner)
    db.session.commit()
    return jsonify({'message': 'Banner deleted!'})

@admin_bp.route('/api/admin/logout', methods=['POST'])
def logout():
    session.pop('admin', None)
    return jsonify({'message': 'Logged out!'})