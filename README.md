# Toobaa Foundation

## Project Overview

Toobaa Foundation is a digital library platform dedicated to preserving rare and out-of-print books that have disappeared from the market. Through careful collection and digitization, we bring these forgotten treasures back to life and make them available to everyone who loves books. Our mission is simple: Save the stories that time tried to erase. This platform provides a comprehensive digital repository of Urdu, Pothwari, Punjabi, English, and historical literature, making it accessible to readers worldwide.

### Project Goals

The primary goals of the Toobaa Foundation project are to preserve rare and endangered literary works that might otherwise be lost forever. We aim to digitize out-of-print books that are no longer available in physical form, making them accessible to a global audience. We strive to create an organized and searchable digital library where users can easily find books by title, author, category, or keywords. We provide administrators with easy-to-use content management tools to manage the growing collection efficiently. We support multiple languages and book categories to serve diverse readers and literary traditions. We enable secure user authentication and implement granular book access control to protect intellectual property while ensuring accessibility.

### Key Features

The platform includes a user-friendly book discovery system that allows users to browse, search, and filter books by categories, authors, and titles. A secure authentication system provides user login with session management to protect user accounts and data. A download management system allows administrators to enable or disable book downloads on a per-book basis. A comprehensive admin dashboard provides inventory management of all books in the system. A banner management system allows administrators to control promotional content displayed on the homepage. The entire platform is designed to be mobile responsive, providing an optimized experience for all device sizes from smartphones to desktop computers. The platform supports multiple languages including Urdu, English, Pothwari, Punjabi, and History books to serve diverse communities. A file management system allows administrators to upload and manage book covers and PDF documents easily. A custom PDF viewer allows users to read books online securely with restricted download capabilities.

---

## Technology Stack

### Frontend Technologies

The frontend is built with HTML5 which provides semantic markup structure for all web pages. CSS3 is used for responsive styling and design that adapts to different screen sizes. JavaScript is used for interactive functionality and DOM manipulation to create dynamic user experiences. The design follows a mobile-first approach ensuring responsive layouts work perfectly on all screen sizes from phones to tablets to desktops.

### Backend Technologies

Flask is used as the Python web framework for handling server-side logic, routing, and application structure. Flask-Mail is used for the email notification system that sends instant alerts to administrators when new messages are received. The backend handles user authentication, session management, book inventory management, and all business logic for the platform.

### Database Technologies

MySQL is used as the relational database management system for storing all application data. The database stores information about users, books, banners, and contact messages. Database management includes structured storage with proper relationships and indexing to ensure efficient queries and data retrieval.

### Additional Tools and Libraries

A file upload system handles image and PDF uploads with proper validation and storage. Session management provides secure user authentication and session handling across the platform. Email notifications system sends automated admin alerts via SMTP protocol. PDF.js library is used for the custom PDF viewer functionality. The system uses standard HTTP protocols and RESTful principles for API design.

---

## System Requirements

Before installing the Toobaa Foundation platform, ensure you have the following tools and software installed on your system. Python version 3.8 or higher is required to run the Flask application. MySQL Server version 5.7 or higher is required for the database. pip, which is the Python package manager, is required to install Python dependencies. Git is required for version control and cloning the repository. A modern web browser such as Chrome, Firefox, Safari, or Edge is needed to access the platform. Node.js is optional and may be used for frontend dependencies if needed.

---

## Installation and Setup

### Step 1: Clone the Repository

To begin installation, open your terminal or command prompt and navigate to the directory where you want to install the project. Run the command git clone https://github.com/devAffaan/Toobaa-foundation.git to download the project files. Then navigate into the project directory by running cd toobaa-foundation.

### Step 2: Set Up Python Virtual Environment

Creating a virtual environment isolates your project dependencies from your system Python installation. Run the command python -m venv venv to create a new virtual environment folder. On Windows systems, activate the virtual environment by running venv\Scripts\activate. On macOS and Linux systems, activate the virtual environment by running source venv/bin/activate. You will see the virtual environment name in your terminal prompt once activated.

### Step 3: Install Python Dependencies

Once the virtual environment is activated, install all required Python packages. Run the command pip install -r requirements.txt to install all dependencies listed in the requirements file. This will install Flask, Flask-Mail, MySQL connector, and all other necessary packages automatically. Wait for the installation to complete successfully.

### Step 4: Configure Environment Variables

Create a new file named .env in the project root directory. This file stores sensitive configuration information. Add the following Flask configuration variables: FLASK_APP=app.py, FLASK_ENV=development, and SECRET_KEY=your_secret_key_here. Add database configuration variables: MYSQL_HOST=localhost, MYSQL_USER=root, MYSQL_PASSWORD=your_password, and MYSQL_DB=toobaa_foundation. Add email configuration for admin notifications: MAIL_SERVER=smtp.gmail.com, MAIL_PORT=587, MAIL_USE_TLS=True, MAIL_USERNAME=your_email@gmail.com, and MAIL_PASSWORD=your_app_password. Add upload configuration: UPLOAD_FOLDER=uploads/ and MAX_CONTENT_LENGTH=52428800 which allows files up to 50MB.

### Step 5: Set Up MySQL Database

Open your MySQL client or terminal. Login to MySQL by running mysql -u root -p and entering your password when prompted. Create the database by running CREATE DATABASE toobaa_foundation CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci. Exit MySQL by running EXIT command.

### Step 6: Initialize Database Tables

With the virtual environment activated, run the command python init_db.py to create all necessary database tables and initialize the database with the correct schema.

### Step 7: Create Upload Directories

The application needs directories to store uploaded files. Run mkdir -p uploads/book_covers to create the directory for book cover images. Run mkdir -p uploads/book_pdfs to create the directory for book PDF files. Run mkdir -p uploads/banners to create the directory for banner images.

### Step 8: Run the Application

With everything configured, run the command python app.py to start the Flask development server. The application will be available at http://localhost:5000 in your web browser. You can now login with username admin and test the platform.

---

## Project File Structure

The project is organized into several key directories and files. In the root directory, app.py is the main Flask application file. requirements.txt contains all Python package dependencies. .env is the environment configuration file you created during setup. init_db.py is the database initialization script. The static directory contains all static files including CSS stylesheets in static/css/style.css and static/css/mobile.css, and JavaScript files in static/js/app.js and static/js/admin.js. The templates directory contains HTML templates including base.html for the base template with header and footer, login.html for the login page, index.html for the homepage with book listing, about.html for the about us page, contact.html for the contact page, admin_dashboard.html for the admin dashboard, add_book_modal.html for the add book modal, and banner_management.html for banner management. The uploads directory contains user uploaded files organized into uploads/book_covers/ for book cover images, uploads/book_pdfs/ for book PDF documents, and uploads/banners/ for banner images. The database directory contains database related files including schema.sql which contains the database schema, and sample_data.sql which contains sample data for testing. README.md is this documentation file.

---

## User Features

<img width="947" height="437" alt="image" src="https://github.com/user-attachments/assets/99b3f4b4-3f03-4182-9667-721c4fbe17fa" />

## Home Page:

The home page features a clean dark navy navbar with the Toobaa Foundation logo on the left, navigation links (Home, About us, Contact) in the center, and a search bar on the right for quick book discovery.
Below the navbar is a full-width banner slider showcasing book covers in a visually rich grid layout giving visitors an instant feel of the library's vast and diverse collection. The banner automatically cycles through images.
The Categories section sits below the banner with icon-based category pills including All Books, English Books, Pothwari Books, History Books, Punjabi Books, Urdu Books, Tasawuf, Biographies, Philosophy Books, Sufi Nama, PhD Thesis, and Islamic Books making it easy for visitors to browse by their preferred genre.

---

<img width="948" height="435" alt="image" src="https://github.com/user-attachments/assets/86230a97-f50a-4562-98cb-5507512ad80b" />

## New Books Section:

Directly below the Categories section is the New Books section a dynamic, automatically updating area that highlights the latest additions to the library. Whenever the admin adds a new book through the admin dashboard, it instantly appears here without any manual effort.
The section features a horizontal slider with left and right arrow buttons on both sides, allowing visitors to scroll through newly added books smoothly. Each book card displays the book cover image, title, and author name with a "View Book" button that takes the visitor directly to the book's detail page.
Books stay in the New Books section for 7 days after being added ensuring the section always feels fresh and encouraging regular visitors to come back and discover what's new in the library.

---

<img width="947" height="299" alt="image" src="https://github.com/user-attachments/assets/c71b34ab-6ed2-4497-be62-82f9191b62b5" />

## Category Sections:

Below the New Books section, the home page is organized into dedicated category sliders each category gets its own clearly labeled horizontal book section, making it effortless for visitors to discover books by their preferred genre.

Each category section features:

1. A bold category title on the left such as "Pothwari Books" or "History Books"
2. A "View More →" button on the top right that takes visitors to a dedicated page showing all books in that category
3. A horizontal scrollable row of book cards, each displaying the book cover image, title, author name and a "View Book" button

The categories covered include Pothwari Books, History Books, Islamic Books, Sufi Nama, English Books, Urdu Books, Punjabi Books, Tasawuf, Biographies, Philosophy Books and more with each section loading its books automatically from the database.
When admin adds a new book to any category, it instantly appears in that category's section on the home page without any manual update needed.

---

<img width="947" height="423" alt="image" src="https://github.com/user-attachments/assets/0e151ab1-7a6b-4270-a568-aa4e676eda99" />

## Book Detail Page:

Clicking "View Book" on any book card takes the visitor to a dedicated Book Detail page a clean, minimal layout that gives complete information about the selected book in one place.
The page features a elegant white card with rounded corners containing:

A "← Back" button at the top left so visitors can easily return to the previous page
The book cover image displayed on the left side of the card
Complete book information on the right side including:

1. Book title in large bold text
2. Author name
3. Category
4. Full description of the book

At the bottom of the card are two action buttons:

"View PDF" opens the book directly in the browser so visitors can read it online without downloading
"Download PDF" downloads the book as a PDF file directly to the visitor's device for offline reading

All information on this page loads automatically from the database when admin adds a book with its cover image, description and PDF, everything appears here instantly without touching any code.

---

<img width="854" height="437" alt="image" src="https://github.com/user-attachments/assets/d61cd1e6-850f-4258-987c-f33e4e02ed70" />

## Related Books Section:

Below the book detail card is a "Related Books" section automatically showing other books from the same category as the book being viewed.
The section displays books in a clean responsive grid layout with each book presented in its own white card with rounded corners containing:

1. The book cover image
2. Book title in bold
3. Author name
4. A "View Book" button to navigate to that book's detail page

This section is fully automatic when a visitor is viewing a History book for example, all other History books from the database appear below as related books. This encourages visitors to discover more books in the same genre without going back to the home page.
The related books grid is responsive showing 4 books per row on desktop and adjusting automatically on smaller screens and mobile devices.

---

<img width="959" height="410" alt="image" src="https://github.com/user-attachments/assets/ae9db6d1-6d8d-45a0-a2bf-e268743e5154" />

## About Us Page:

The About Us page features a clean minimal layout with the same dark navy navbar at the top for consistent navigation across the website.
The page contains a simple yet powerful mission statement explaining the foundation's purpose dedicated to preserving rare and out-of-print books that have disappeared from the market. Through careful collection and digitization, the foundation brings these forgotten treasures back to life and makes them freely available to everyone who loves books. The mission is summarized simply as: "Save the stories that time tried to erase."
The page ends with the dark navy footer showing the copyright notice keeping the design consistent with the rest of the website.

---


<img width="948" height="438" alt="image" src="https://github.com/user-attachments/assets/fa94d74b-706c-45b3-b785-8e9ee658bafd" />

## Contact Page:

The Contact page features a clean two-column layout with the heading "Connect With Us" and a subtitle inviting visitors to get in touch freely.
The left side contains a "Send your request" form with the following fields:

1. Name and Phone on the first row
2. Email and Subject on the second row
3. A large Message text area below
4. A dark navy "Send" button at the bottom

The right side features a "Reach Us" dark navy panel displaying the foundation's direct contact information including email, phone number and address making it easy for visitors to reach out through any preferred method.
The contact form is fully functional and connected to the backend when a visitor fills out and submits the form, two things happen simultaneously:

The message is saved to the MySQL database so the admin can review all messages anytime
An automatic email notification is sent instantly to the admin's device via Flask-Mail so the admin never misses a message even without checking the database.

---


<img width="802" height="387" alt="image" src="https://github.com/user-attachments/assets/4329fb78-3fe0-4f99-b65a-a921389e1e4d" />

## Login Page:

The Login page features a clean, centered card-based layout with the heading "Toobaa Foundation" and a subtitle inviting users to authenticate and access the platform.

Form Structure:
The login form contains the following fields:

1. Username field on the first row for entering user credentials (default placeholder: "admin")
2. Password field on the second row with masked input for security
3. A dark navy "Login" button at the bottom for form submission

Design Features:
The right side features a light beige background providing a professional and minimalist aesthetic, making the white card stand out prominently. The form layout is vertically centered and optimized for an intuitive user experience across devices.

Functionality:
The login form is fully functional and connected to the backend when a user enters credentials and submits the form, two things happen simultaneously:

1. User credentials are validated against the database to authenticate the user and grant access to the platform
2.Session management is initiated via backend authentication so the user remains logged in while navigating the application the system never loses track of the authenticated user even when switching between pages.

---


<img width="947" height="422" alt="image" src="https://github.com/user-attachments/assets/335f31f6-a4ce-42ec-84f9-53034d38a36b" />

## Admin Dashboard:

The Admin Dashboard is a comprehensive management interface for the Toobaa Foundation's digital library and promotional content system. It features a professional dark navy header with the title "Toobaa Foundation Admin" and a "Logout" button in the top-right corner for secure session termination.
Key Statistics:
The dashboard displays Total Books: 34, providing a quick overview of the complete library inventory at a glance.

Books Management Section:
The page includes an "+ Add New Book" button positioned in the top-right section, allowing administrators to quickly expand the book collection with new entries.
Books Management Table:
The dashboard features a comprehensive data table with the following columns:

1. ID - Sequential identifier for each book entry
2. Cover - Thumbnail image of the book cover for visual identification
3. Title - The name of the book
4. Author - The creator or writer of the book
5. Category - Book classification (e.g., Pothwari Books, History Books)
6. Action - Delete button for removing books from the inventory.

---


<img width="814" height="195" alt="image" src="https://github.com/user-attachments/assets/55be9c35-ffb3-41b3-a197-d8633646dca4" />

## Banner Management:

Below the books table, the dashboard includes a dedicated Banner Management module for controlling promotional content and homepage banners.
Features:
The Banner Management section includes an "+ Add Banner" button allowing administrators to upload and create new promotional banners for the foundation's website.

Banner Display:
The interface showcases multiple banner entries displayed as thumbnail previews, each featuring:

1. Banner Image - Visual representation of promotional content including book covers, collages, and marketing materials
2. Delete Button - A red "Delete" button overlay on each banner for easy removal of outdated or inactive promotions

Current Banners:
The system displays various promotional banners featuring book collections, Urdu literature catalogs, and thematic promotions related to the foundation's book inventory.

---


<img width="956" height="431" alt="image" src="https://github.com/user-attachments/assets/1184fafd-24d2-45a0-a906-fd2452ff0474" />

## Add New Book Modal:

When administrators click the "+ Add New Book" button, a modal dialog appears titled "Add New Book" with an intuitive form for creating new book entries.
Form Fields:
The modal includes the following input fields:

1. Title - Text input field for entering the book title with placeholder "Book title"
2. Author - Text input field for entering the author name with placeholder "Author name"
3. Category - Text input field for specifying the book category with example placeholder "e.g. Pothwari, History"
4. Description - Large textarea field for entering a detailed description of the book's content and themes

File Upload Features:
The form includes two dedicated file upload sections:

1. Cover Image - "Choose file" button allowing administrators to upload book cover images from their device (currently shows "No file chosen")
2. PDF File - "Choose file" button enabling administrators to upload the actual book document/PDF from their local storage (currently shows "No file chosen")

Download Permission Controls:
The modal features a Download Permission section with a checkbox control labeled "Enable" (currently enabled/checked). This toggle allows administrators to:

1. Enable - Allow users to download the book PDF from the platform
2. Disable - Restrict downloads and limit access to online reading only

Action Buttons:
At the bottom of the modal, two buttons are provided:

1. Cancel - Closes the modal without saving any changes
2. Add Book - Saves the new book entry with all uploaded files and settings to the database.

---


<img width="945" height="245" alt="image" src="https://github.com/user-attachments/assets/83cba231-4bea-4079-b3db-3ae1d4c8cb40" />

## Website Footer:

The footer is a comprehensive information section displayed at the bottom of the website with a dark navy background, providing essential details about the foundation and ways to connect with the organization.

About Us Section:
The footer features a prominent "About Us" heading followed by a detailed mission statement describing the foundation's core purpose and values:
Mission Statement: "We are a foundation dedicated to preserving rare and out-of-print books that have disappeared from the market. Through careful collection and digitization, we bring these forgotten treasures back to life and make them available to everyone who loves books. Our mission is simple: Save the stories that time tried to erase."
This compelling narrative highlights the foundation's commitment to literary preservation and digital accessibility.

Contact Information:
The footer includes direct contact details for users to reach out:

Email: toobaafoundation@gmail.com - Primary point of contact for inquiries, suggestions, and collaboration opportunities

Social Media Links:
The footer features social media integration with clickable icons for the foundation's presence on major platforms:

1. Instagram - Connect with the foundation's visual content and updates
2.Facebook - Follow official announcements and community discussions
3. TikTok - Discover engaging short-form content about books and literary heritage

Copyright Notice:
A copyright statement is displayed at the bottom: "© 2025 Toobaa Foundation. All rights reserved." Indicating legal ownership and intellectual property protection of the platform and its content.

---

<img width="209" height="358" alt="image" src="https://github.com/user-attachments/assets/bd0b7c58-4019-4471-b7aa-62d2875c9246" />

## Mobile View:

The mobile view of the Toobaa Foundation website features a responsive design optimized for smaller screens with intuitive navigation and organized content categories.
Header Section:
The top of the page displays a dark navy header containing:

Toobaa Foundation Logo/branding text on the left side
Hamburger Menu Icon (☰) - Located in the top-right corner, this three-line icon opens a navigation drawer menu for accessing different pages

Navigation Menu:
When users click the hamburger menu icon, a dropdown navigation panel appears featuring the following links:

1. Home - Returns to the homepage/main dashboard
2.About us - Navigates to the foundation's mission and information page
3. Contact - Directs users to the contact form for inquiries and messages

Search Bar:
Below the header, a search input field is prominently displayed, allowing users to search for specific books within the collection by title, author, or keywords.
Featured Books Section:
The page showcases a horizontal scrollable carousel displaying featured and popular books from the collection, with thumbnail cover images visible for quick browsing.

---


<img width="947" height="436" alt="image" src="https://github.com/user-attachments/assets/e3fba5f4-93ce-436b-bdcb-7d5b61d4f09e" />

## 404 Page:

A clean, minimalist, and user-friendly custom 404 "Page Not Found" error page designed for the Toobaa Foundation website. This page ensures that users who encounter a broken link or a non-existent URL can easily find their way back to the main content.

---

## Deployment Instructions

### Prerequisites for Production Deployment

A Linux or Unix server such as Ubuntu is required to run the application. Python 3.8 or higher must be installed on the server. MySQL server must be installed and running on the server. A web server such as Nginx or Apache is required to proxy requests. An SSL certificate is required for HTTPS encryption in production.

### Deploy on Linux Server

SSH into your server using SSH credentials. Clone the repository using git clone https://github.com/devAffaan/Toobaa-foundation.git. Navigate into the project directory. Create a Python virtual environment using python3 -m venv venv. Activate the virtual environment using source venv/bin/activate. Install all dependencies using pip install -r requirements.txt. Create and configure the .env file with production settings. Create the MySQL database and tables using mysql -u root -p < database/schema.sql. Install Gunicorn for production using pip install gunicorn. Run the application using gunicorn -w 4 -b 0.0.0.0:8000 app:app which runs 4 worker processes. Configure Nginx to proxy requests from port 80 to localhost:8000.

### Deploy on Heroku

Install the Heroku CLI on your local machine. Login to Heroku using heroku login. Create a new app using heroku create your-app-name. Add a MySQL add-on using heroku addons:create cleardb:ignite. Configure environment variables using heroku config:set FLASK_ENV=production and heroku config:set SECRET_KEY=your_secret_key. Deploy the application using git push heroku main.

### Deploy on AWS or DigitalOcean

Use Docker containerization to package the application. Deploy to EC2 instances on AWS or Droplet instances on DigitalOcean. Use AWS RDS for managed MySQL database. Use Amazon S3 for storing uploaded files in the cloud. Set up CloudFront CDN for fast file delivery globally.

---

## Troubleshooting Guide

### Common Issues and Solutions

If you get a ModuleNotFoundError when running the app, first ensure your virtual environment is activated properly. Run pip install -r requirements.txt again to install all dependencies. Check that your Python version is 3.8 or higher using python --version.

If you get a database connection error, verify that MySQL is running on your system using sudo systemctl status mysql. Check that all database credentials in your .env file are correct. Ensure that the toobaa_foundation database exists by running mysql -u root -p -e SHOW DATABASES. Run python init_db.py to initialize the database tables.

If file upload is not working, check that the upload folder has correct permissions using chmod 755 uploads/. Verify that MAX_CONTENT_LENGTH in your configuration is set high enough. Ensure that the file size is within the upload limit. Check that the file type is allowed such as .jpg for images and .pdf for documents.

If email notifications are not sending, verify the MAIL_SERVER settings in your .env file are correct. If using Gmail, enable Less secure apps in your Gmail account settings. Use an app-specific password for Gmail instead of your regular password. Check that your server firewall allows outgoing connections on port 587.

If the login page shows blank or styling issues, clear your browser cache by pressing Ctrl+Shift+Delete. Check that CSS file paths in your templates are correct. Verify that static files are in the correct folder and accessible. Run flask run --reload to restart the development server.

If the mobile menu is not working, check that JavaScript files are loaded properly. Verify that the hamburger menu ID matches between CSS and JavaScript. Test in a different browser to rule out browser-specific issues. Open the browser console by pressing F12 and check for JavaScript errors.

### Frequently Asked Questions

Q: How do I reset the admin password?
A: Run this SQL command in MySQL: UPDATE users SET password=SHA2('newpassword', 256) WHERE username='admin';

Q: Can I disable downloads for specific books?
A: Yes, when adding or editing a book in the admin dashboard, in the Download Permission section, uncheck the Enable checkbox to disable downloads for that book.

Q: How do I backup the database?
A: Run the command mysqldump -u root -p toobaa_foundation > backup.sql to create a backup file.

Q: Where are uploaded files stored?
A: Book covers are stored in uploads/book_covers/, Book PDFs are stored in uploads/book_pdfs/, and Banner images are stored in uploads/banners/.

Q: How do I add more book categories?
A: Update the category selection dropdown in add_book_modal.html to add new categories. Also update the book filtering options in index.html to include the new category.

---

## Contributing Guidelines

### Getting Started with Contributions

We welcome contributions from developers and book enthusiasts who want to help improve the platform. To get started, fork the repository on GitHub. Create a new feature branch using git checkout -b feature/your-feature-name. Make your changes and test thoroughly before submitting. Commit your changes using git commit -m 'Add your feature description'. Push your changes using git push origin feature/your-feature-name. Create a Pull Request on GitHub with a clear description of your changes.

### Code Standards

Follow PEP 8 style guidelines for all Python code. Use meaningful variable and function names that clearly describe their purpose. Add comments to explain complex logic or non-obvious code sections. Keep functions under 50 lines to maintain readability. Test all changes thoroughly before submitting. Use proper error handling with try-except blocks.

### Types of Contributions

We accept bug fixes for issues found in the platform. We welcome feature additions that improve functionality. We appreciate documentation improvements and clarifications. We value book recommendations to add to the collection. We support translation efforts to add new language support. We encourage UI and UX enhancements for better user experience.

---

### How to Report Issues

When reporting a bug or issue, include a detailed description of the problem. Provide step-by-step instructions on how to reproduce the issue. Describe the expected behavior versus the actual behavior you observed. Include screenshots or error messages if available. Provide your system information including operating system, browser name and version, and Python version.

---

## Changelog and Version History

### Version 1.0.0 - Initial Release

This is the first official release of the Toobaa Foundation platform. Features included: User authentication system with secure login. Book browsing and search functionality across the library. Admin dashboard with complete book management. Banner management system for promotional content. Contact form with automatic email notifications to admin. Mobile responsive design for all device sizes. Multi-language book support including Urdu, English, Pothwari, Punjabi, and History books. Download permission controls for each book. Category filtering to organize books by type. Social media integration for sharing and following. Custom PDF viewer with security restrictions. Secure file upload and management system.

## Additional Resources and Documentation

Flask Official Documentation - https://flask.palletsprojects.com/ - Complete Flask framework documentation and tutorials.

MySQL Official Documentation - https://dev.mysql.com/doc/ - Comprehensive MySQL database documentation.

HTML and CSS Reference - https://developer.mozilla.org/ - MDN Web Docs with HTML, CSS, and web standards information.

JavaScript Guide - https://developer.mozilla.org/en-US/docs/Web/JavaScript/ - Complete JavaScript language documentation and examples.

Git Version Control - https://git-scm.com/doc - Official Git documentation for version control.

PDF.js Library - https://mozilla.github.io/pdf.js/ - Documentation for the PDF.js library used in the viewer.

---

Last Updated: May 2026
Maintained By: devAffaan
Repository: https://github.com/devAffaan/Toobaa-foundation
Platform Version: 1.0.0







