document.addEventListener("DOMContentLoaded", function() {
  // === Arrays and objects ===
  let videoSets = [
    { videoId: "heroVideo", btnId: "heroPlayButton" },
    { videoId: "customVideo", btnId: "playButton" }
  ];

  // === Loop through all video sets ===
  for (let i = 0; i < videoSets.length; i++) {
    let videoInfo = videoSets[i];
    let video = document.getElementById(videoInfo.videoId);
    let playBtn = document.getElementById(videoInfo.btnId);

    if (!video || !playBtn) {
      continue;
    }

    // === Function to play video with sound ===
    function playWithSound(v, btn) {
      v.muted = false;
      let playPromise = v.play();

      if (playPromise !== undefined) {
        playPromise.catch(function(err) {
          btn.classList.remove("hidden");
          console.log("Play failed for " + v.id + ":", err);
        });
      }
    }

    // === Button click ===
    playBtn.addEventListener("click", function(e) {
      e.preventDefault();
      if (video.paused) {
        playWithSound(video, playBtn);
      } else {
        video.pause();
      }
    });

    // === Video click ===
    video.addEventListener("click", function() {
      if (video.paused) {
        playWithSound(video, playBtn);
      } else {
        video.pause();
      }
    });

    // === Show/hide button ===
    video.addEventListener("play", function() {
      playBtn.classList.add("hidden");
    });
    video.addEventListener("pause", function() {
      playBtn.classList.remove("hidden");
    });
    video.addEventListener("ended", function() {
      playBtn.classList.remove("hidden");
    });
  }

  // === Pause videos when out of view ===
  let videos = document.getElementsByClassName("custom-video");

  function checkVideosInView() {
    for (let j = 0; j < videos.length; j++) {
      let rect = videos[j].getBoundingClientRect();
      let visible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
      if (!visible && !videos[j].paused) {
        videos[j].pause();
      }
    }
  }

  window.addEventListener("scroll", checkVideosInView);
});
