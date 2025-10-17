// js/story_rotator.js
(() => {
  const rotatorRoot = document.getElementById('storyRotator');
  if (!rotatorRoot) return;

  const btn   = document.getElementById('storyNext');
  const text  = document.getElementById('storyText');
  const image = document.getElementById('storyImage');

  // Grab the two headings inside the rotator
  const titles = rotatorRoot.querySelectorAll('.story-title');
  const titlePrimary   = titles[0] || null; // "Tid er det, vi har mindst af..."
  const titleSecondary = titles[1] || null; // "Eller er det?"

  // Start hidden: nothing shown until first click
  if (text)  text.style.display  = 'none';
  if (image) image.style.display = 'none';

  const items = [
    { text: '"Se 4 afsnit af Friends... igen."', img: 'images/friends.gif', alt: '"Se 4 afsnit af Friends... igen."' },
    { text: '"Scrolle 3,2 kilometer ned i dit Instagram-feed."', img: 'images/instagram2hs.gif', alt: '"Scrolle 3,2 kilometer ned i dit Instagram-feed."' },
    { text: '"Overtænke en besked, du sendte i går."', img: 'images/overthinking.gif', alt: '"Overtænke en besked, du sendte i går."' },
    { text: '"Bruge 1 time på at vælge en film og 1 time på at se den."', img: 'images/pickmovie.gif', alt: '"Bruge 1 time på at vælge en film og 1 time på at se den."' },
    { text: '"Du kan også bruge 2 timer OM MÅNEDEN på at gøre en reel forskel for en ung. Hvad tæller mest?"', img: 'images/ventileninstead.gif', alt: '"Du kan også bruge 2 timer OM MÅNEDEN på at gøre en reel forskel for en ung. Hvad tæller mest?"' }
  ];

  let index = -1;
  let hasRendered = false;
  let firstClickHandled = false;

  function render(i) {
    const item = items[i];
    if (!item) return;

    text.classList.remove('fade-in');
    image.classList.remove('fade-in');
    void text.offsetWidth; // reflow

    text.textContent = item.text;
    image.src = item.img;
    image.alt = item.alt;

    if (!hasRendered) {
      text.style.display = '';
      image.style.display = '';
      hasRendered = true;
    }

    text.classList.add('fade-in');
    image.classList.add('fade-in');
  }

  // Preload images
  items.forEach(it => { const img = new Image(); img.src = it.img; });

  btn.addEventListener('click', () => {
    // Do these only on the very first click
    if (!firstClickHandled) {
      if (titlePrimary) {
        titlePrimary.textContent = 'Hvad kan du nå på 2 timer?';
        titlePrimary.style.color = '#1A3DFF'; // make it blue
      }
      if (titleSecondary) {
        // remove the "Eller er det?" title
        titleSecondary.remove(); // or: titleSecondary.style.display = 'none';
      }
      firstClickHandled = true;
    }

    index = (index + 1) % items.length;
    render(index);
  });

  // Keyboard accessibility
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
})();
