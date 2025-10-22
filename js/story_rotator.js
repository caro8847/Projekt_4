//venter til siden er loadet, og henter så elementerne://
window.onload = function() { 
  const btn = document.getElementById('storyNext');
  const text = document.getElementById('storyText');
  const image = document.getElementById('storyImage');

//bygger array med disse elementer//
  const items = [
    { text: 'PÅ 2 TIMER KAN DU NÅ AT: "Se 4 afsnit af Friends... igen."', img: 'images/friends.gif' },
    { text: 'PÅ 2 TIMER KAN DU NÅ AT: "Scrolle 3,2 kilometer ned i dit Instagram-feed."', img: 'images/instagram2hs.gif' },
    { text: 'PÅ 2 TIMER KAN DU NÅ AT: "Overtænke en besked, du sendte i går."', img: 'images/overthinking.gif' },
    { text: 'PÅ 2 TIMER KAN DU NÅ AT: "Bruge 1 time på at vælge en film og 1 time på at se den."', img: 'images/pickmovie.gif' },
    { text: '"Du kan også bruge 2 timer OM MÅNEDEN på at gøre en reel forskel for en ung. Hvad tæller mest?"', img: 'images/ventileninstead.gif' }
  ];

  //opretter variabel med værdi 0//
  let index = 0;

  //siger at text og image IKKE skal vises i starten//
  text.style.display = 'none';
  image.style.display = 'none';

  //opretter de ting der skal være med i funktion "render"//
  function render() {
    const currentItem = items[index];
    text.textContent = currentItem.text;
    image.src = currentItem.img;
  }

  //når "tidsknappen" trykkes kører funktionen render//
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
