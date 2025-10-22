(function () {
  // Henter elementer direkte uden sikkerhedstjek
  const rotatorRoot = document.getElementById('storyRotator');
  const btn = document.getElementById('storyNext');
  const text = document.getElementById('storyText');
  const image = document.getElementById('storyImage');

  // Henter overskrifter direkte og antager, de altid findes
  const titles = rotatorRoot.getElementsByClassName('story-title');
  const titlePrimary = titles[0];   // Antager, at det første element findes
  const titleSecondary = titles[1]; // Antager, at det andet element findes

  // Skjuler elementer ved start uden sikkerhedstjek
  text.style.display = 'none';
  image.style.display = 'none';

  // Data: Items (objekter i et array)
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

  // Preload images
  for (let i = 0; i < items.length; i++) {
    const pre = new Image();
    pre.src = items[i].img;
  }

  // Click handler (DOM)
  btn.onclick = function () {
    // Første klik: ændrer titler uden sikkerhedstjek
    if (!firstClickHandled) {
      titlePrimary.textContent = 'Hvad kan du nå på 2 timer?';
      titlePrimary.style.color = '#1A3DFF';
      titleSecondary.parentNode.removeChild(titleSecondary);
      firstClickHandled = true;
    }

    // Rotations-logik
    index = index + 1;
    if (index >= items.length) {
      index = 0;
    }
    render(index);
  };
})();
