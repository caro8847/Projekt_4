// Link til hjælp fra ChatGPT: https://chatgpt.com/share/68eff72c-61a0-800a-a973-38c9f8fb9bc8

//tjekker om JS-filen indlæses korrekt
console.log('It works:)')

//finder footer-elementet i DOM, hvor links skal indsættes
const footer = document.getElementById('footer-right');

//Array med SoMe-data (link, ikon, alt-tekst og css-class)
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

//opret og tilføl SoMe-links
function addSocials() {

    //loop gennem alle sociale medier i array
    for (let i = 0; i < socials.length; i++) {
    const s = socials[i];

        //laver et <a> link-element 
        const a = document.createElement('a');
        a.href = s.href;
        a.target = "_blank";
        a.setAttribute("aria-label", s.alt);
        a.className = s.class
        
        //laver <i>-element til ikon
        const iElem = document.createElement("i");
        iElem.className = s.icon;
        
        //tilføjer ikonet til <a>-linket
        a.appendChild(iElem);
    
        //når man klikker på linket, logges der i console afhængig af, om href er tom eller ej
        a.addEventListener('click', () => {
            if (s.href === "") {
                console.log("Link mangler for", s.alt);
            } else {
                 console.log("Du klikkede på", s.alt);
            }
        });
        
        //tilføjer links til footer
        footer.appendChild(a);
    }
}

//kalder funktionen, så links genereres og indsættes
addSocials();