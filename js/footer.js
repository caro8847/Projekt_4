// Link til hjælp fra ChatGPT: https://chatgpt.com/share/68eff72c-61a0-800a-a973-38c9f8fb9bc8

console.log('It works:)')

const footer = document.getElementById('footer-right');

const socials = [
    {
        href:   "https://www.instagram.com/ventilendanmark/",
        icon:   "fa-brands fa-instagram",
        alt:    "Instagram icon",
        class:  "social-ig"
    },
    {
        href:   "https://www.facebook.com/ventilendanmark/",
        icon:   "fa-brands fa-facebook-f",
        alt:    "FaceBook icon",
        class:  "social-fb"
    }
];

function addSocials() {
    for (let i = 0; i < socials.length; i++) {
    const s = socials[i];

        const a = document.createElement('a');
        a.href = s.href;
        a.target = "_blank";
        a.setAttribute("aria-label", s.alt);
        a.className = s.class
    
        const iElem = document.createElement("i");
        iElem.className = s.icon;
    
        a.appendChild(iElem);
    
        a.addEventListener('click', () => {
            if (s.href === "") {
                console.log("Link mangler for", s.alt);
            } else {
                 console.log("Du klikkede på", s.alt);
            }
            });
    
        footer.appendChild(a);
    }
}

addSocials();