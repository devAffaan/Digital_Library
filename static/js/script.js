let bannerInterval = null;

window.onload = function() {
    if (document.getElementById('booksdiv')) {
        loadBooks();
    }
    loadNewBooks();
    loadBanners();
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

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBooks();
            }
        });
    }

    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchBooks();
        });
    }

});

async function loadBooks() {
    try {
        const response = await fetch('/api/books');
        const books = await response.json();
        const newSection = document.querySelector('.s-new');
        if (newSection) newSection.style.display = 'block';
        displayBooks(books);
    } catch (error) {
        console.error('Error loading books:', error);
    }
}

async function searchBooks() {
    const query = document.getElementById('searchInput').value.trim();

    if (query === '') {
        loadBooks();
        return;
    }

    try {
        const response = await fetch(`/api/books/search?q=${query}`);
        const books = await response.json();
        displayBooks(books, true);
    } catch (error) {
        console.error('Error searching:', error);
    }
}

async function filterBooks(category) {
    if (category === 'all') {
        loadBooks();
        document.getElementById('booksdiv').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    try {
        const response = await fetch(`/api/books/category/${encodeURIComponent(category)}`);
        const books = await response.json();
        displayBooks(books, true);
        document.getElementById('booksdiv').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Error filtering:', error);
    }
}

function displayBooks(books, hideNewArrivals = false) {
    const booksdiv = document.getElementById('booksdiv');

    if (!booksdiv) return;

    const newSection = document.querySelector('.s-new');
    if (newSection) newSection.style.display = hideNewArrivals ? 'none' : 'block';

    if (books.length === 0) {
        booksdiv.innerHTML = '<p style="padding:20px; text-align:center; white-space:nowrap;">No books found.</p>';
        return;
    }

    let html = '';
    books.forEach(book => {
        html += `
            <div class="bookcard">
                <img 
                    src="/static/${book.cover_image}" 
                    alt="${book.title}"
                    onerror="this.src='/static/images/default.png'">
                <h3 class="fh3">${book.title}</h3>
                <p class="author">Author: <span class="author-name">${book.author}</span></p>
                <a href="/book/${book.id}">View Book</a>
            </div>
        `;
    });

    booksdiv.innerHTML = html;
    applyUrduFont();
}

function applyUrduFont() {
    const urduRegex = /[\u0600-\u06FF]/;

    document.querySelectorAll('.fh3').forEach(el => {
        if (urduRegex.test(el.textContent)) {
            el.style.fontFamily = "'Noto Nastaliq Urdu', sans-serif";
            el.style.direction = 'rtl';
        } else {
            el.style.fontFamily = "'Poppins', sans-serif";
            el.style.direction = 'ltr';
        }
    });

    document.querySelectorAll('.author-name').forEach(el => {
        if (urduRegex.test(el.textContent)) {
            el.style.fontFamily = "'Noto Nastaliq Urdu', sans-serif";
        } else {
            el.style.fontFamily = "'Poppins', sans-serif";
        }
    });
}

async function loadNewBooks() {
    const track = document.getElementById('newTrack');
    if (!track) return;

    try {
        const response = await fetch('/api/books/new');
        const books = await response.json();

        if (books.length === 0) {
            document.querySelector('.s-new').style.display = 'none';
            return;
        }

        const slider = document.getElementById('newSlider');
        const prevBtn = document.getElementById('newPrev');
        const nextBtn = document.getElementById('newNext');

        const perSlide = window.innerWidth <= 768 ? 2 : 6;
        const chunks = [];
        for (let i = 0; i < books.length; i += perSlide) {
            chunks.push(books.slice(i, i + perSlide));
        }

        chunks.forEach(chunk => {
            const slide = document.createElement('div');
            slide.classList.add('new-slide');
            chunk.forEach(book => {
                const card = document.createElement('div');
                card.classList.add('new-book-card');
                card.innerHTML = `
                    <a href="/book/${book.id}">
                        <img src="/static/${book.cover_image}"
                             alt="${book.title}"
                             onerror="this.src='/static/images/default.png'">
                        <h3 class="fh3">${book.title}</h3>
                        <p class="author"><span class="author-name">${book.author}</span></p>
                        <span class="view-btn">View Book</span>
                    </a>
                `;
                slide.appendChild(card);
            });
            track.appendChild(slide);
        });

        applyUrduFont();

        let current = 0;
        const totalSlides = chunks.length;

        function updateSlider() {
            track.style.transform = `translateX(-${current * 100}%)`;
            prevBtn.style.opacity = current === 0 ? '0.3' : '1';
            nextBtn.style.opacity = current === totalSlides - 1 ? '0.3' : '1';
        }

        nextBtn.addEventListener('click', () => {
            if (current < totalSlides - 1) {
                current++;
                updateSlider();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (current > 0) {
                current--;
                updateSlider();
            }
        });

        let touchStartX = 0;
        slider.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        });
        slider.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (diff > 50 && current < totalSlides - 1) {
                current++;
                updateSlider();
            } else if (diff < -50 && current > 0) {
                current--;
                updateSlider();
            }
        });

        updateSlider();

    } catch (error) {
        console.error('Error loading new books:', error);
    }
}

async function loadBanners() {
    const track = document.getElementById('bannerTrack');
    if (!track) return;

    if (bannerInterval) {
        clearInterval(bannerInterval);
        bannerInterval = null;
    }

    track.innerHTML = '';
    track.style.transition = 'none';
    track.style.transform = 'translateX(0%)';

    try {
        const response = await fetch('/api/banners?t=' + Date.now());
        const banners = await response.json();

        if (banners.length === 0) return;

        for (const banner of banners) {
            await new Promise(resolve => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = resolve;
                img.src = `/static/${banner.image_path}`;
            });
            const slide = document.createElement('div');
            slide.classList.add('banner-slide');
            slide.innerHTML = `<img src="/static/${banner.image_path}" alt="Banner">`;
            track.appendChild(slide);
        }

        const firstClone = track.firstElementChild.cloneNode(true);
        track.appendChild(firstClone);

        const totalBanners = banners.length;
        let current = 0;
        let isTransitioning = false;

        function goTo(index) {
            if (isTransitioning) return;
            isTransitioning = true;
            current = index;
            track.style.transition = 'transform 0.6s ease';
            track.style.transform = `translateX(-${current * 100}%)`;

            setTimeout(() => {
                isTransitioning = false;
                if (current === totalBanners) {
                    track.style.transition = 'none';
                    current = 0;
                    track.style.transform = `translateX(0%)`;
                }
            }, 700);
        }

        bannerInterval = setInterval(() => {
            goTo(current + 1);
        }, 4000);

    } catch (error) {
        console.error('Error loading banners:', error);
    }
}