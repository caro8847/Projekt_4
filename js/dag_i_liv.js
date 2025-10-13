document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('customVideo');
  const playBtn = document.getElementById('playButton');

  if (!video || !playBtn) return;

  // Ensure audio plays (requires a user gesture)
  const playWithSound = async () => {
    try {
      video.muted = false;
      // Some browsers need explicit call to load before play when preload is "auto"
      // video.load(); // usually not needed, but safe to uncomment if required
      await video.play();
    } catch (err) {
      // If autoplay with sound is blocked, show the button again
      playBtn.classList.remove('hidden');
      console.warn('Play failed:', err);
    }
  };

  // Click the custom button to play/pause
  playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (video.paused) {
      playWithSound();
    } else {
      video.pause();
    }
  });

  // Toggle by clicking the video (optional)
  video.addEventListener('click', () => {
    if (video.paused) {
      playWithSound();
    } else {
      video.pause();
    }
  });

  // Hide/show the overlay button based on state
  video.addEventListener('play', () => playBtn.classList.add('hidden'));
  video.addEventListener('pause', () => playBtn.classList.remove('hidden'));
  video.addEventListener('ended', () => playBtn.classList.remove('hidden'));

  // NOTE: No JS for the logo — the anchor + smooth-scroll CSS already handle it.
});
