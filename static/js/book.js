const pdfjsLib = window['pdfjs-dist/build/pdf'];

const bookId = window.location.pathname.split('/').pop();

let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;

async function loadBook() {
    try {
        const response = await fetch(`/api/books/${bookId}`);

        if (!response.ok) {
            document.querySelector('.bookDetailsection').innerHTML =
                '<p style="text-align:center;padding:50px">Book not found!</p>';
            return;
        }

        const book = await response.json();

        document.getElementById('bookImg').src = `/static/${book.cover_image}`;
        document.getElementById('bookImg').alt = book.title;
        document.getElementById('bookTitle').textContent = book.title;
        document.getElementById('bookAuthor').textContent = book.author;
        document.getElementById('bookCategory').textContent = book.category;
        document.getElementById('bookDescription').textContent =
            book.description || 'No description available.';

        document.getElementById('viewBtn').setAttribute('data-book-id', book.id);
        document.getElementById('downloadBtn').href = `/api/books/download/${book.id}`;
        document.getElementById('downloadBtn').setAttribute('download', book.title);

        if (!book.download_enabled) {
            document.getElementById('downloadBtn').style.display = 'none';
        }

        document.title = `${book.title} - Toobaa Foundation`;
        loadRelatedBooks(book.id, book.category);
        detectAndSetFont();

    } catch (error) {
        console.error('Error loading book:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
            });
        });
    }
});

function openPDFModal() {
    const bookId = document.getElementById('viewBtn').getAttribute('data-book-id');
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/static/pdfjs/pdf.worker.js';
    document.getElementById('pdfModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    currentPage = 1;
    loadPDF(`/api/books/view/${bookId}`);
}

function closePDFModal() {
    document.getElementById('pdfModal').classList.remove('active');
    document.body.style.overflow = '';
    pdfDoc = null;
    currentPage = 1;
    const canvas = document.getElementById('pdfCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

async function loadPDF(url) {
    pdfDoc = await pdfjsLib.getDocument(url).promise;
    totalPages = pdfDoc.numPages;
    document.getElementById('pageCount').textContent = totalPages;
    renderPage(currentPage);
}

async function renderPage(num) {
    const page = await pdfDoc.getPage(num);
    const canvas = document.getElementById('pdfCanvas');
    const ctx = canvas.getContext('2d');
    const wrapper = document.querySelector('.pdf-canvas-wrapper');
    const scale = wrapper.clientWidth / page.getViewport({ scale: 1 }).width * 0.92;
    const viewport = page.getViewport({ scale });
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: ctx, viewport }).promise;
    document.getElementById('pageNum').textContent = num;
}

function prevPage() {
    if (currentPage <= 1) return;
    currentPage--;
    renderPage(currentPage);
}

function nextPage() {
    if (currentPage >= totalPages) return;
    currentPage++;
    renderPage(currentPage);
}

function detectAndSetFont() {
    const urduRegex = /[\u0600-\u06FF]/;
    const fields = {
        'bookTitle': document.getElementById('bookTitle'),
        'bookAuthor': document.getElementById('bookAuthor'),
        'bookCategory': document.getElementById('bookCategory'),
        'bookDescription': document.getElementById('bookDescription')
    };

    Object.values(fields).forEach(el => {
        if (el && urduRegex.test(el.textContent)) {
            el.style.fontFamily = "'Noto Nastaliq Urdu', sans-serif";
            el.style.direction = 'rtl';
            el.style.textAlign = 'right';
        } else if (el) {
            el.style.fontFamily = "'Poppins', sans-serif";
            el.style.direction = 'ltr';
            el.style.textAlign = 'left';
        }
    });
}

async function loadRelatedBooks(currentBookId, category) {
    const grid = document.getElementById('relatedGrid');
    if (!grid) return;

    try {
        const response = await fetch(`/api/books/related/${currentBookId}`);
        const books = await response.json();

        if (books.length === 0) {
            document.querySelector('.related-section').style.display = 'none';
            return;
        }

        grid.innerHTML = books.map(book => `
            <div class="related-card">
                <a href="/book/${book.id}">
                    <img src="/static/${book.cover_image}"
                         alt="${book.title}"
                         onerror="this.src='/static/images/default.png'">
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <span class="view-btn">View Book</span>
                </a>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error loading related books:', error);
    }
}

function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = '/';
    }
}

loadBook();