// js/story_rotator.js
(() => {
    const rotatorRoot = document.getElementById('storyRotator');
    if (!rotatorRoot) return;
  
    const btn   = document.getElementById('storyNext');
    const text  = document.getElementById('storyText');
    const image = document.getElementById('storyImage');
  
    // TODO: swap these texts + image paths with your real content
    const items = [
      {
        text: 'Som frivillig starter jeg aftenen med at gøre klar — kaffe på kanden og spil på bordet.',
        img:  'images/rotator_1.webp',
        alt:  'Frivillige forbereder aftenaktiviteter med kaffe og brætspil'
      },
      {
        text: 'De første unge kommer — vi smalltalker, griner og sætter en aktivitet i gang.',
        img:  'images/rotator_2.webp',
        alt:  'Små grupper af unge der taler og griner ved et bord'
      },
      {
        text: 'Midt i det hele opstår der samtaler, der betyder noget — om ensomhed, mod og hverdagsglimt.',
        img:  'images/rotator_3.webp',
        alt:  'To personer i en rolig samtale i et hjørne'
      },
      {
        text: 'Vi spiller bowling/kort/kreativt — fællesskabet vokser i det små.',
        img:  'images/rotator_4.webp',
        alt:  'Gruppeaktivitet i gang — spil og smil'
      },
      {
        text: 'Til sidst runder vi af, rydder op og siger på gensyn — og man går hjem lettere om hjertet.',
        img:  'images/rotator_5.webp',
        alt:  'Aftenen slutter, folk siger farvel i døren'
      }
    ];
  
    let index = 0;
  
    function render(i) {
      const item = items[i];
      // simple fade reset
      text.classList.remove('fade-in');
      image.classList.remove('fade-in');
  
      // force reflow so the animation can replay
      // eslint-disable-next-line no-unused-expressions
      void text.offsetWidth;
  
      text.textContent = item.text;
      image.src = item.img;
      image.alt = item.alt;
  
      // re-add animation class
      text.classList.add('fade-in');
      image.classList.add('fade-in');
    }
  
    // Preload images (optional, helps instant swaps)
    items.forEach(it => {
      const img = new Image();
      img.src = it.img;
    });
  
    // Initial render
    render(index);
  
    // Advance on click and loop
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
  