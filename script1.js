const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
let currentPage = 0;
let isAnimating = false;

function initializeBook() {
    pages.forEach((page, index) => {
        page.style.zIndex = pages.length - index;
        if (index === 0) {
            page.classList.add('visible');
        }
    });
}

initializeBook();

book.addEventListener('click', () => {
    if (!isAnimating && currentPage < pages.length - 1) {
        flipNextPage();
    } else if (!isAnimating && currentPage === pages.length - 1) {
        resetBook();
    }
});

function flipNextPage() {
    isAnimating = true;
    const currentPageElement = pages[currentPage];
    const nextPageElement = pages[currentPage + 1];
    
    currentPageElement.style.transform = 'rotateY(-180deg)';
    currentPageElement.style.zIndex = currentPage;
    currentPageElement.classList.remove('visible');

    setTimeout(() => {
        nextPageElement.classList.add('visible');
        currentPage++;
        isAnimating = false;
    }, 250);
}

function resetBook() {
    isAnimating = true;
    
    // Mostrar el contenido de todas las páginas
    pages.forEach(page => {
        page.classList.add('visible');
    });

    // Voltear las páginas de atrás hacia adelante
    for (let i = pages.length - 1; i >= 0; i--) {
        setTimeout(() => {
            pages[i].style.transform = 'rotateY(0deg)';
            pages[i].style.zIndex = pages.length - i;
            if (i !== 0) {
                setTimeout(() => {
                    pages[i].classList.remove('visible');
                }, 150);
            }
        }, (pages.length - 1 - i) * 200);
    }

    setTimeout(() => {
        currentPage = 0;
        isAnimating = false;
    }, (pages.length - 1) * 200 + 300);
}

// Envuelve el contenido de cada página en un div con clase 'content'
pages.forEach(page => {
    const front = page.querySelector('.front');
    const back = page.querySelector('.back');
    front.innerHTML = `<div class="content">${front.innerHTML}</div>`;
    back.innerHTML = `<div class="content">${back.innerHTML}</div>`;
});