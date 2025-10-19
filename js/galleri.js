// js/carousel.js
(() => {
    const root = document.getElementById('testiCarousel');
    if (!root) return;
  
    const track   = root.querySelector('.carousel-track');
    const slides  = Array.from(track.children);
    const prevBtn = root.querySelector('.carousel-nav.prev');
    const nextBtn = root.querySelector('.carousel-nav.next');
    const dotsWrap= root.querySelector('.carousel-dots');
  
    let index = slides.findIndex(s => s.classList.contains('is-active'));
    if (index < 0) index = 0;
  
    function setIndex(i) {
      index = (i + slides.length) % slides.length; // wrap around
      track.style.transform = `translateX(${-index * 100}%)`;
      slides.forEach((s, j) => s.classList.toggle('is-active', j === index));
      if (dotsWrap) {
        dotsWrap.querySelectorAll('button').forEach((b, j) => {
          b.classList.toggle('is-active', j === index);
        });
      }
    }
  
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      slides.forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', `Gå til slide ${i + 1}`);
        b.addEventListener('click', () => setIndex(i));
        dotsWrap.appendChild(b);
      });
    }
  
    buildDots();
    setIndex(index);
  
    prevBtn?.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      setIndex(index - 1);
    });
  
    nextBtn?.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      setIndex(index + 1);
    });
  
    // Ensure each slide spans the viewport width of the carousel root
    function syncWidths() {
      const w = root.clientWidth;
      slides.forEach(s => (s.style.width = `${w}px`));
    }
    window.addEventListener('resize', syncWidths);
    syncWidths();
  })();
  