// Portfolio Sketchbook Interactive Script

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const book = document.querySelector('.book');
  const cover = document.querySelector('.cover');
  const nav = document.querySelector('.nav');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const closeBtn = document.getElementById('close');
  
  let isOpen = false;
  let currentPage = 0;
  const totalPages = 1; // Update based on number of spreads
  
  // Open/Close Book
  function toggleBook() {
    isOpen = !isOpen;
    
    if (isOpen) {
      book.classList.add('open');
      cover.classList.add('under');
      nav.classList.add('show');
      cover.setAttribute('aria-expanded', 'true');
    } else {
      book.classList.remove('open');
      book.classList.add('closing');
      cover.classList.remove('under');
      nav.classList.remove('show');
      cover.setAttribute('aria-expanded', 'false');
      
      setTimeout(() => {
        book.classList.remove('closing');
      }, 1400);
    }
    
    updateNav();
  }
  
  // Navigate Pages
  function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      updateNav();
      animatePageTurn('next');
    }
  }
  
  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      updateNav();
      animatePageTurn('prev');
    }
  }
  
  // Update Navigation Buttons
  function updateNav() {
    if (!isOpen) {
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }
    
    prevBtn.disabled = (currentPage === 0);
    nextBtn.disabled = (currentPage === totalPages);
  }
  
  // Animate Page Turn
  function animatePageTurn(direction) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
      if (index === currentPage * 2 || index === currentPage * 2 + 1) {
        page.classList.add('in');
      } else {
        page.classList.remove('in');
      }
    });
  }
  
  // Event Listeners
  cover.addEventListener('click', toggleBook);
  cover.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleBook();
    }
  });
  
  prevBtn.addEventListener('click', prevPage);
  nextBtn.addEventListener('click', nextPage);
  closeBtn.addEventListener('click', toggleBook);
  
  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    
    switch(e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevPage();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextPage();
        break;
      case 'Escape':
        e.preventDefault();
        if (isOpen) toggleBook();
        break;
    }
  });
  
  // Initialize
  updateNav();
  
  // Add touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  book.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  book.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    if (!isOpen) return;
    
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next page
        nextPage();
      } else {
        // Swipe right - previous page
        prevPage();
      }
    }
  }
});
