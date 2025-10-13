document.addEventListener('DOMContentLoaded', () => {
  const videoSets = [
    { videoId: 'heroVideo', btnId: 'heroPlayButton' },
    { videoId: 'customVideo', btnId: 'playButton' },
  ];

  videoSets.forEach(({ videoId, btnId }) => {
    const video = document.getElementById(videoId);
    const playBtn = document.getElementById(btnId);
    if (!video || !playBtn) return;

    const playWithSound = async () => {
      try {
        video.muted = false;
        await video.play();
      } catch (err) {
        playBtn.classList.remove('hidden');
        console.warn(`Play failed for ${videoId}:`, err);
      }
    };

    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (video.paused) playWithSound();
      else video.pause();
    });

    video.addEventListener('click', () => {
      if (video.paused) playWithSound();
      else video.pause();
    });

    video.addEventListener('play', () => playBtn.classList.add('hidden'));
    video.addEventListener('pause', () => playBtn.classList.remove('hidden'));
    video.addEventListener('ended', () => playBtn.classList.remove('hidden'));
  });

  // === Pause videos when out of view ===
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      });
    },
    {
      threshold: 0.25, // triggers when less than 25% of video is visible
    }
  );

  document.querySelectorAll('video.custom-video').forEach((v) => observer.observe(v));
});
