//js/galleri.js
var root = document.getElementById("galleri");
if (root) {
    var track = root.querySelector(".galleri-track");
    var slides = track.children;
    var prevBtn = root.querySelector(".galleri-prev");
    var nextBtn = root.querySelector(".galleri-next");
    var index = 0;

    function showSlide(i) {
        if (i < 0) {
            i = slides.length - 1;
        } else if (i >= slides.length) {
            i = 0;
        }
        index = i;

        for (var n = 0; n < slides.length; n++) {
            slides[n].style.display = "none";
        }

        slides[index].style.display = "block";
    }

    prevBtn.addEventListener("click", function () {
        showSlide(index - 1);
    });

    nextBtn.addEventListener("click", function () {
        showSlide(index + 1);
    });

    showSlide(index);
}