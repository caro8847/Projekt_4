// Galleri eller Carousel eller hvad man nu kalder det...
var root = document.getElementById("galleri");
if (root) {
  var track   = root.querySelector(".galleri-track");
  var slides  = track.children;                 // HTMLCollection
  var prevBtn = root.querySelector(".galleri-prev");
  var nextBtn = root.querySelector(".galleri-next");
  var dotsBox = root.querySelector(".dots");
  var index   = 0;

  console.log("Slides fundet:", slides.length); // debugging

  // Byg dots (en knap pr. slide)
  function buildDots() {
    var i;
    dotsBox.innerHTML = "";
    for (i = 0; i < slides.length; i++) {
      var b = document.createElement("button");
      b.setAttribute("aria-label", "Gå til slide " + (i + 1));
      b.dataset.index = String(i);
      b.addEventListener("click", function () {
        var to = parseInt(this.dataset.index, 10);
        showSlide(to);
      });
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
