from flask import Blueprint, make_response, request, jsonify, send_from_directory
import os
from datetime import datetime, timedelta

from models import Book
books_bp = Blueprint('books', __name__)

@books_bp.route('/api/books')
def get_books():
    books = Book.query.all()
    return jsonify([book.to_dict() for book in books])

@books_bp.route('/api/books/new')
def get_new_books():
    seven_days_ago = datetime.utcnow() - timedelta(days=7)
    books = Book.query.filter(Book.created_at >= seven_days_ago).order_by(Book.id.desc()).limit(15).all()
    return jsonify([book.to_dict() for book in books])

@books_bp.route('/api/books/category/<string:category>')
def get_books_by_category(category):
    books = Book.query.filter(Book.category == category).all()
    return jsonify([book.to_dict() for book in books])

@books_bp.route('/api/books/search')
def search_books():
    query = request.args.get('q', '')
    books = Book.query.filter(Book.title.contains(query)).all()
    return jsonify([book.to_dict() for book in books])

@books_bp.route('/api/books/related/<int:book_id>')
def get_related_books(book_id):
    book = Book.query.get_or_404(book_id)
    related = Book.query.filter(
        Book.category == book.category,
        Book.id != book_id
    ).limit(8).all()
    return jsonify([b.to_dict() for b in related])

@books_bp.route('/api/books/<int:book_id>')
def get_book(book_id):
    book = Book.query.get_or_404(book_id)
    return jsonify(book.to_dict())

@books_bp.route('/api/books/view/<int:book_id>')
def view_book(book_id):
    book = Book.query.get_or_404(book_id)
    pdf_folder = os.path.join(os.getcwd(), 'static', 'pdfs')
    filename = os.path.basename(book.pdf_path)
    response = make_response(send_from_directory(pdf_folder, filename, as_attachment=False))
    response.headers['Content-Disposition'] = 'inline'
    response.headers['X-Content-Type-Options'] = 'nosniff'
    return response

@books_bp.route('/api/books/download/<int:book_id>')
def books_download(book_id):
    book = Book.query.get_or_404(book_id)
    if not book.download_enabled:
        return jsonify({'message': 'Download is disabled for this book'}), 403
    pdf_folder = os.path.join(os.getcwd(), 'static', 'pdfs')
    filename = os.path.basename(book.pdf_path)
    return send_from_directory(pdf_folder, filename, as_attachment=True)