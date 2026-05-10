from flask import Blueprint, request, jsonify
from models import Contact
from database import db
from flask_mail import Message
import os

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()


    if not data.get('name') or not data.get('email') or not data.get('message'):
        return jsonify({'message': 'Name, email and message are required!'}), 400

    new_contact = Contact(
        name=data['name'],
        email=data['email'],
        message=data['message'],
        phone=data.get('phone', ''),
        subject=data.get('subject', '')
    )
    db.session.add(new_contact)
    db.session.commit()

    try:
        from app import mail
        msg = Message(
            subject=f"New Contact: {data.get('subject', 'No Subject')}",
            sender=os.getenv('MAIL_USERNAME'),
            recipients=[os.getenv('ADMIN_EMAIL')]
        )
        msg.body = f"""
New message from Toobaa Foundation!

Name:    {data['name']}
Email:   {data['email']}
Phone:   {data.get('phone', 'Not provided')}
Subject: {data.get('subject', 'Not provided')}

Message:
{data['message']}
        """
        mail.send(msg)
    except Exception as e:
        print(f"Email error: {e}")

    return jsonify({'message': 'Message sent successfully!'})