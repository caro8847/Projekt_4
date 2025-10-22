window.onload = function() {
  const btn = document.getElementById('storyNext');
  const text = document.getElementById('storyText');
  const image = document.getElementById('storyImage');

  const items = [
    { text: 'PÅ 2 TIMER KAN DU NÅ AT: "Se 4 afsnit af Friends... igen."', img: 'images/friends.gif' },
    { text: 'PÅ 2 TIMER KAN DU NÅ AT: "Scrolle 3,2 kilometer ned i dit Instagram-feed."', img: 'images/instagram2hs.gif' },
    { text: 'PÅ 2 TIMER KAN DU NÅ AT: "Overtænke en besked, du sendte i går."', img: 'images/overthinking.gif' },
    { text: 'PÅ 2 TIMER KAN DU NÅ AT: "Bruge 1 time på at vælge en film og 1 time på at se den."', img: 'images/pickmovie.gif' },
    { text: '"Du kan også bruge 2 timer OM MÅNEDEN på at gøre en reel forskel for en ung. Hvad tæller mest?"', img: 'images/ventileninstead.gif' }
  ];

  let index = 0;

  text.style.display = 'none';
  image.style.display = 'none';

  function render() {
    const currentItem = items[index];
    text.textContent = currentItem.text;
    image.src = currentItem.img;
    image.alt = currentItem.text;
  }

  btn.onclick = function () {
    if (text.style.display === 'none') {
      text.style.display = '';
      image.style.display = '';
    } else {
      index = index + 1;
      if (index >= items.length) {
        index = 0;
      }
    }
    render();
  };
};
