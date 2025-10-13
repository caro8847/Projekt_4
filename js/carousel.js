// js/carousel.js
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('testiCarousel');
    if (!root) return;
  
    const track = root.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prev = root.querySelector('.carousel-nav.prev');
    const next = root.querySelector('.carousel-nav.next');
    const dotsWrap = root.querySelector('.carousel-dots');
  
    let index = 0;
    const clamp = (n) => (n + slides.length) % slides.length;
  
    // build dots dynamically
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Gå til slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  
    const updateUI = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
      dotsWrap.querySelectorAll('button').forEach((d, i) =>
        d.classList.toggle('is-active', i === index)
      );
    };
  
    const goTo = (i) => {
      index = clamp(i);
      updateUI();
    };
  
    prev.addEventListener('click', () => goTo(index - 1));
    next.addEventListener('click', () => goTo(index + 1));
  
    // --- Swipe controls ---
    let startX = 0, dx = 0, dragging = false;
    const onStart = (e) => {
      dragging = true;
      startX = (e.touches ? e.touches[0].clientX : e.clientX);
    };
    const onMove = (e) => {
      if (!dragging) return;
      dx = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
    };
    const onEnd = () => {
      if (!dragging) return;
      dragging = false;
      if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
      dx = 0;
    };
  
    track.addEventListener('touchstart', onStart, { passive: true });
    track.addEventListener('touchmove', onMove, { passive: true });
    track.addEventListener('touchend', onEnd);
    track.addEventListener('mousedown', onStart);
    track.addEventListener('mousemove', onMove);
    track.addEventListener('mouseleave', onEnd);
    track.addEventListener('mouseup', onEnd);
  
    // keyboard arrows
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') goTo(index - 1);
      if (e.key === 'ArrowRight') goTo(index + 1);
    });
  
    // initialize
    updateUI();
  });
  