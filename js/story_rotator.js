// js/story_rotator.js
(function () {
  const rotatorRoot = document.getElementById('storyRotator');
  if (!rotatorRoot) return;

  const btn   = document.getElementById('storyNext');
  const text  = document.getElementById('storyText');
  const image = document.getElementById('storyImage');

  // The two headings inside the rotator
  const titles = rotatorRoot.getElementsByClassName('story-title');
  const titlePrimary   = titles.length > 0 ? titles[0] : null; // "Tid er det, vi har mindst af..."
  const titleSecondary = titles.length > 1 ? titles[1] : null; // "Eller er det?"

  // Start hidden: nothing shown until first click
  if (text)  text.style.display  = 'none';
  if (image) image.style.display = 'none';

  // Items (objects in an array)
  const items = [
    { text: '"Se 4 afsnit af Friends... igen."', img: 'images/friends.gif', alt: '"Se 4 afsnit af Friends... igen."' },
    { text: '"Scrolle 3,2 kilometer ned i dit Instagram-feed."', img: 'images/instagram2hs.gif', alt: '"Scrolle 3,2 kilometer ned i dit Instagram-feed."' },
    { text: '"Overtænke en besked, du sendte i går."', img: 'images/overthinking.gif', alt: '"Overtænke en besked, du sendte i går."' },
    { text: '"Bruge 1 time på at vælge en film og 1 time på at se den."', img: 'images/pickmovie.gif', alt: '"Bruge 1 time på at vælge en film og 1 time på at se den."' },
    { text: '"Du kan også bruge 2 timer OM MÅNEDEN på at gøre en reel forskel for en ung. Hvad tæller mest?"', img: 'images/ventileninstead.gif', alt: '"Du kan også bruge 2 timer OM MÅNEDEN på at gøre en reel forskel for en ung. Hvad tæller mest?"' }
  ];

  // State
  let index = -1;
  let hasRendered = false;
  let firstClickHandled = false;

  function render(i) {
    if (i < 0 || i >= items.length) return;

    const item = items[i];
    text.textContent = item.text;
    image.src = item.img;
    image.alt = item.alt;

    if (!hasRendered) {
      text.style.display = '';
      image.style.display = '';
      hasRendered = true;
    }
  }

  // Preload images (loop)
  for (let i = 0; i < items.length; i++) {
    const pre = new Image();
    pre.src = items[i].img;
  }

  // Click handler (basic DOM)
  btn.onclick = function () {
    // First click: change titles
    if (!firstClickHandled) {
      if (titlePrimary) {
        titlePrimary.textContent = 'Hvad kan du nå på 2 timer?';
        titlePrimary.style.color = '#1A3DFF';
      }
      if (titleSecondary && titleSecondary.parentNode) {
        titleSecondary.parentNode.removeChild(titleSecondary);
      }
      firstClickHandled = true;
    }

    // Rotate
    index = index + 1;
    if (index >= items.length) {
      index = 0;
    }
    render(index);
  };
})();
