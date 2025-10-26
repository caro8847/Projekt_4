// Galleri Maria
//link til hjælpevideo fra youtube: https://www.youtube.com/watch?v=VUtJ7FWCfZA&list=PLpwngcHZlPae68z_mLFNfbJFIJVJ_Zcx2
//link til hjælp fra W3schools: https://www.w3schools.com/js/js_loop_for.asp 

//Finder hele galleriet i HTML'en
var root = document.getElementById("galleri");
if (root) { //hvis galleriet findes så kører koden herunder
  var track   = root.querySelector(".galleri-track"); //Finder den del der holder alle billederne
  var slides  = track.children; //Finder alle billederne inde i galleriet
  var prevBtn = root.querySelector(".galleri-prev"); //Finder venstre pil
  var nextBtn = root.querySelector(".galleri-next"); //Finder højre pil
  var dotsBox = root.querySelector(".dots"); //Finder boksen hvor prikkerne (dots) skal være
  var index   = 0; //Starter på billede nummer 0 (det første billede)

  //Skriver ud i konsollen hvor mange billeder der er (hjælper når man tester)
  console.log("Slides fundet:", slides.length);

  // Byg dots (en knap pr. slide)
  function buildDots() {
    var i;
    dotsBox.innerHTML = ""; //Fjerner alt der allerede er i boksen
    for (i = 0; i < slides.length; i++) { //Går igennem alle billederne ét for ét
      var b = document.createElement("button"); //Laver en ny knap
      b.setAttribute("aria-label", "Gå til slide " + (i + 1)); //Giver knappen et navn som kan bruges af skærmlæsere
      b.dataset.index = String(i); //Gemmer nummeret på knappen
      b.addEventListener("click", function () { //Når man klikker på knappen skal det rigtige billede vises
        var to = parseInt(this.dataset.index, 10);
        showSlide(to); //Viser det rigtige billede
      });
      //Sætter knappen ind i
      dotsBox.appendChild(b);
    }
  }

  // Vis ét slide ad gangen + marker dot
  function showSlide(i) {
    if (i < 0) { i = slides.length - 1; }
    else if (i >= slides.length) { i = 0; }
    index = i;

    var n;
    for (n = 0; n < slides.length; n++) {
      slides[n].classList.remove("is-active");
      slides[n].style.display = "none";
    }
    slides[index].classList.add("is-active");
    slides[index].style.display = "block";

    var ds = dotsBox.querySelectorAll("button");
    for (n = 0; n < ds.length; n++) {
      ds[n].classList.toggle("is-active", n === index);
    }
  }

  // Pile-events
  prevBtn.addEventListener("click", function () { showSlide(index - 1); });
  nextBtn.addEventListener("click", function () { showSlide(index + 1); });

  // Start
  buildDots();
  showSlide(index);
}
