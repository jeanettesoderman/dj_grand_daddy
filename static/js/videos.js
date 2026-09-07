// DJ Grand Daddy - Automatic YouTube video feed

const YOUTUBE_API_URL =
  "https://dj-grand-daddy-youtube.jeanettesoderman73.workers.dev";

// Load YouTube data from Cloudflare Worker
async function loadYouTubeData() {
  try {
    const response = await fetch(YOUTUBE_API_URL);

    if (!response.ok) {
      throw new Error(`YouTube data request failed: ${response.status}`);
    }

    const data = await response.json();

    if (!data.videos || data.videos.length === 0) {
      throw new Error("No videos returned from YouTube");
    }

    renderLatestVideo(data.videos[0]);
    renderVideoGallery(data.videos);
  } catch (error) {
    console.error("Could not load YouTube videos:", error);

    showLatestVideoError();
    showVideoGalleryError();
  }
}

// Render latest release on the home page
function renderLatestVideo(video) {
  const container = document.querySelector("[data-latest-video]");

  if (!container) {
    return;
  }

  container.replaceChildren();

  const iframe = document.createElement("iframe");

  iframe.width = "100%";
  iframe.height = "500";
  iframe.src = `https://www.youtube.com/embed/${video.id}`;
  iframe.title = video.title;
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute("allowfullscreen", "");

  const info = document.createElement("div");
  info.className = "featured-info";

  const title = document.createElement("h3");
  title.textContent = video.title;

  const description = document.createElement("p");
  description.textContent =
    video.description || "Watch the latest release on YouTube.";

  info.append(title, description);
  container.append(iframe, info);
}

// Render all regular videos on the Music page
function renderVideoGallery(videos) {
  const grid = document.querySelector("[data-video-grid]");

  if (!grid) {
    return;
  }

  grid.replaceChildren();

  videos.forEach((video, index) => {
    const card = document.createElement("div");
    card.className = "video-card";

    const link = document.createElement("a");
    link.href = video.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.className = "video-thumbnail";

    const image = document.createElement("img");
    image.src = video.thumbnail;
    image.alt = video.title;
    image.decoding = "async";

    if (index > 2) {
      image.loading = "lazy";
    }

    const overlay = document.createElement("div");
    overlay.className = "play-overlay";

    const playButton = document.createElement("div");
    playButton.className = "play-button";
    playButton.textContent = "▶";

    overlay.appendChild(playButton);
    thumbnailContainer.append(image, overlay);
    link.appendChild(thumbnailContainer);

    const info = document.createElement("div");
    info.className = "video-info";

    const title = document.createElement("h3");
    title.textContent = video.title;

    const description = document.createElement("p");
    description.textContent =
      video.description || "Watch on YouTube.";

    info.append(title, description);
    card.append(link, info);
    grid.appendChild(card);
  });
}

// Fallback message on Home if YouTube cannot be reached
function showLatestVideoError() {
  const container = document.querySelector("[data-latest-video]");

  if (!container) {
    return;
  }

  container.textContent =
    "The latest release could not be loaded right now.";
}

// Fallback message on Music if YouTube cannot be reached
function showVideoGalleryError() {
  const grid = document.querySelector("[data-video-grid]");

  if (!grid) {
    return;
  }

  grid.textContent =
    "The video library could not be loaded right now.";
}

// Start loading the YouTube content
loadYouTubeData();