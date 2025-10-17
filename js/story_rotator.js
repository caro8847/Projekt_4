// js/story_rotator.js
(() => {
  const rotatorRoot = document.getElementById('storyRotator');
  if (!rotatorRoot) return;

  const btn   = document.getElementById('storyNext');
  const text  = document.getElementById('storyText');
  const image = document.getElementById('storyImage');

  // Start hidden: nothing shown until first click
  if (text)  text.style.display  = 'none';
  if (image) image.style.display = 'none';

  // Replace with your real content
  const items = [
    { text: '"Se 4 afsnit af Friends... igen."', img: 'images/rotator_1.webp', alt: '"Se 4 afsnit af Friends... igen."' },
    { text: '"Scrolle 3,2 kilometer ned i dit Instagram-feed."', img: 'images/rotator_2.webp', alt: '"Scrolle 3,2 kilometer ned i dit Instagram-feed."' },
    { text: '"Overtænke en besked, du sendte i går."', img: 'images/rotator_3.webp', alt: '"Overtænke en besked, du sendte i går."' },
    { text: '"Bruge 1 time på at vælge en film og 1 time på at se den."', img: 'images/rotator_4.webp', alt: '"Bruge 1 time på at vælge en film og 1 time på at se den."' },
    { text: '"Du kan også bruge 2 timer OM MÅNEDEN på at gøre en reel forskel for en ung. Hvad tæller mest?"', img: 'images/rotator_5.webp', alt: '"Du kan også bruge 2 timer OM MÅNEDEN på at gøre en reel forskel for en ung. Hvad tæller mest?"' }
  ];

  // No initial render; set to -1 so first click shows index 0
  let index = -1;
  let hasRendered = false;

  function render(i) {
    const item = items[i];
    if (!item) return;

    // simple fade reset
    text.classList.remove('fade-in');
    image.classList.remove('fade-in');

    // force reflow so the animation can replay
    // eslint-disable-next-line no-unused-expressions
    void text.offsetWidth;

    text.textContent = item.text;
    image.src = item.img;
    image.alt = item.alt;

    // Unhide on first render
    if (!hasRendered) {
      text.style.display = '';
      image.style.display = '';
      hasRendered = true;
    }

    // re-add animation class
    text.classList.add('fade-in');
    image.classList.add('fade-in');
  }

  // Preload images (optional, helps instant swaps)
  items.forEach(it => {
    const img = new Image();
    img.src = it.img;
  });

  // Advance on click and loop (first click renders the first item)
  btn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    render(index);
  });

  // Keyboard accessibility (Space/Enter)
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
})();
