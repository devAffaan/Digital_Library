# Toobaa-Foundation
<img width="947" height="437" alt="image" src="https://github.com/user-attachments/assets/99b3f4b4-3f03-4182-9667-721c4fbe17fa" />

# Home Page Description:

The home page features a clean dark navy navbar with the Toobaa Foundation logo on the left, navigation links (Home, About us, Contact) in the center, and a search bar on the right for quick book discovery.
Below the navbar is a full-width banner slider showcasing book covers in a visually rich grid layout giving visitors an instant feel of the library's vast and diverse collection. The banner automatically cycles through images.
The Categories section sits below the banner with icon-based category pills including All Books, English Books, Pothwari Books, History Books, Punjabi Books, Urdu Books, Tasawuf, Biographies, Philosophy Books, Sufi Nama, PhD Thesis, and Islamic Books making it easy for visitors to browse by their preferred genre.

<img width="948" height="435" alt="image" src="https://github.com/user-attachments/assets/86230a97-f50a-4562-98cb-5507512ad80b" />

# New Books Section Description:

Directly below the Categories section is the New Books section a dynamic, automatically updating area that highlights the latest additions to the library. Whenever the admin adds a new book through the admin dashboard, it instantly appears here without any manual effort.
The section features a horizontal slider with left and right arrow buttons on both sides, allowing visitors to scroll through newly added books smoothly. Each book card displays the book cover image, title, and author name with a "View Book" button that takes the visitor directly to the book's detail page.
Books stay in the New Books section for 7 days after being added ensuring the section always feels fresh and encouraging regular visitors to come back and discover what's new in the library.

<img width="947" height="299" alt="image" src="https://github.com/user-attachments/assets/c71b34ab-6ed2-4497-be62-82f9191b62b5" />

# Category Sections Description:

Below the New Books section, the home page is organized into dedicated category sliders each category gets its own clearly labeled horizontal book section, making it effortless for visitors to discover books by their preferred genre.

Each category section features:

1. A bold category title on the left such as "Pothwari Books" or "History Books"
2. A "View More →" button on the top right that takes visitors to a dedicated page showing all books in that category
3. A horizontal scrollable row of book cards, each displaying the book cover image, title, author name and a "View Book" button

The categories covered include Pothwari Books, History Books, Islamic Books, Sufi Nama, English Books, Urdu Books, Punjabi Books, Tasawuf, Biographies, Philosophy Books and more with each section loading its books automatically from the database.
When admin adds a new book to any category, it instantly appears in that category's section on the home page without any manual update needed.

<img width="947" height="423" alt="image" src="https://github.com/user-attachments/assets/0e151ab1-7a6b-4270-a568-aa4e676eda99" />

# Book Detail Page Description:

Clicking "View Book" on any book card takes the visitor to a dedicated Book Detail page a clean, minimal layout that gives complete information about the selected book in one place.
The page features a elegant white card with rounded corners containing:

A "← Back" button at the top left so visitors can easily return to the previous page
The book cover image displayed on the left side of the card
Complete book information on the right side including:

Book title in large bold text
Author name
Category
Full description of the book

At the bottom of the card are two action buttons:

"View PDF" opens the book directly in the browser so visitors can read it online without downloading
"Download PDF" downloads the book as a PDF file directly to the visitor's device for offline reading

All information on this page loads automatically from the database when admin adds a book with its cover image, description and PDF, everything appears here instantly without touching any code.

<img width="854" height="437" alt="image" src="https://github.com/user-attachments/assets/d61cd1e6-850f-4258-987c-f33e4e02ed70" />

# Related Books Section Description:

Below the book detail card is a "Related Books" section automatically showing other books from the same category as the book being viewed.
The section displays books in a clean responsive grid layout with each book presented in its own white card with rounded corners containing:

1. The book cover image
2. Book title in bold
3. Author name
4. A "View Book" button to navigate to that book's detail page

This section is fully automatic when a visitor is viewing a History book for example, all other History books from the database appear below as related books. This encourages visitors to discover more books in the same genre without going back to the home page.
The related books grid is responsive showing 4 books per row on desktop and adjusting automatically on smaller screens and mobile devices.

<img width="959" height="410" alt="image" src="https://github.com/user-attachments/assets/ae9db6d1-6d8d-45a0-a2bf-e268743e5154" />

# About Us Page Description:

The About Us page features a clean minimal layout with the same dark navy navbar at the top for consistent navigation across the website.
The page contains a simple yet powerful mission statement explaining the foundation's purpose dedicated to preserving rare and out-of-print books that have disappeared from the market. Through careful collection and digitization, the foundation brings these forgotten treasures back to life and makes them freely available to everyone who loves books. The mission is summarized simply as: "Save the stories that time tried to erase."
The page ends with the dark navy footer showing the copyright notice keeping the design consistent with the rest of the website.


<img width="948" height="438" alt="image" src="https://github.com/user-attachments/assets/fa94d74b-706c-45b3-b785-8e9ee658bafd" />

# Contact Page Description:

The Contact page features a clean two-column layout with the heading "Connect With Us" and a subtitle inviting visitors to get in touch freely.
The left side contains a "Send your request" form with the following fields:

1. Name and Phone on the first row
2. Email and Subject on the second row
3. A large Message text area below
4. A dark navy "Send" button at the bottom

The right side features a "Reach Us" dark navy panel displaying the foundation's direct contact information including email, phone number and address making it easy for visitors to reach out through any preferred method.
The contact form is fully functional and connected to the backend when a visitor fills out and submits the form, two things happen simultaneously:

The message is saved to the MySQL database so the admin can review all messages anytime
An automatic email notification is sent instantly to the admin's device via Flask-Mail so the admin never misses a message even without checking the database


<img width="802" height="387" alt="image" src="https://github.com/user-attachments/assets/4329fb78-3fe0-4f99-b65a-a921389e1e4d" />

# Login Page Description:

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
2.Session management is initiated via backend authentication so the user remains logged in while navigating the application the system never loses track of the authenticated user even when switching between pages


<img width="947" height="422" alt="image" src="https://github.com/user-attachments/assets/335f31f6-a4ce-42ec-84f9-53034d38a36b" />

# Admin Dashboard Description:

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
6. Action - Delete button for removing books from the inventory


<img width="814" height="195" alt="image" src="https://github.com/user-attachments/assets/55be9c35-ffb3-41b3-a197-d8633646dca4" />

# Banner Management Description:

Below the books table, the dashboard includes a dedicated Banner Management module for controlling promotional content and homepage banners.
Features:
The Banner Management section includes an "+ Add Banner" button allowing administrators to upload and create new promotional banners for the foundation's website.

Banner Display:
The interface showcases multiple banner entries displayed as thumbnail previews, each featuring:

1. Banner Image - Visual representation of promotional content including book covers, collages, and marketing materials
2. Delete Button - A red "Delete" button overlay on each banner for easy removal of outdated or inactive promotions

Current Banners:
The system displays various promotional banners featuring book collections, Urdu literature catalogs, and thematic promotions related to the foundation's book inventory.


<img width="956" height="431" alt="image" src="https://github.com/user-attachments/assets/1184fafd-24d2-45a0-a906-fd2452ff0474" />

# Add New Book Modal Description:

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
2. Add Book - Saves the new book entry with all uploaded files and settings to the database


<img width="945" height="245" alt="image" src="https://github.com/user-attachments/assets/83cba231-4bea-4079-b3db-3ae1d4c8cb40" />

# Website Footer Description:

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


<img width="209" height="358" alt="image" src="https://github.com/user-attachments/assets/bd0b7c58-4019-4471-b7aa-62d2875c9246" />

# Mobile View Description:

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







