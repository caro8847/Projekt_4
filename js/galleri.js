// Galleri eller Carousel eller hvad man nu kalder det...

//Finder hele galleriet i HTML'en
var root = document.getElementById("galleri");
if (root) { //hvis galleriet findes så kører koden herunder
  var track   = root.querySelector(".galleri-track"); //Finder den del der holder alle billederne
  var slides  = track.children; //Finder alle billederne inde i galleriet
  var prevBtn = root.querySelector(".galleri-prev"); //Finder venstre pil
  //Finder højre pil
  var nextBtn = root.querySelector(".galleri-next");
  //Finder boksen hvor prikkerne (dots) skal være
  var dotsBox = root.querySelector(".dots");
  //Starter på billede nummer 0 (det første billede)
  var index   = 0;

  //Skriver ud i konsollen hvor mange billeder der er (hjælper når man tester)
  console.log("Slides fundet:", slides.length);

  // Byg dots (en knap pr. slide)
  function buildDots() {
    var i;
    //Fjerner alt der allerede er i boksen
    dotsBox.innerHTML = "";
    //Går igennem alle billederne ét for ét
    for (i = 0; i < slides.length; i++) {
      //Laver en ny knap
      var b = document.createElement("button");
      //Giver knappen et navn som kan bruges af skærmlæsere
      b.setAttribute("aria-label", "Gå til slide " + (i + 1));
      //Gemmer nummeret på knappen
      b.dataset.index = String(i);
      //Når man klikker på knappen skal det rigtige billede vises
      b.addEventListener("click", function () {
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
