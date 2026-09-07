// DJ Grand Daddy video library

const videos = [
    {
        title: "When Sound Shapes Reality – Obsidian Frequency (Dark Electronic x PSYBASS)",
        url: "https://www.youtube.com/watch?v=Zuo9zlbHXA0",
        thumbnail: "https://i.ytimg.com/vi/Zuo9zlbHXA0/hqdefault.jpg",
        description: "Obsidian Frequency | Dark Electronic x PSYBASS"
    },
    {
        title: "Drift of the Wild – Afro House & Organic Tribal House - Official Music Video",
        url: "https://www.youtube.com/watch?v=XLmlo7kRztY",
        thumbnail: "https://i.ytimg.com/vi/XLmlo7kRztY/hqdefault.jpg",
        description: "Afro House & Organic Tribal House | Official Music Video"
    },
    {
        title: "Take Me Higher – 7 Minutes of Dark Trance Euphoria",
        url: "https://www.youtube.com/watch?v=tBEIA598U8c",
        thumbnail: "https://i.ytimg.com/vi/tBEIA598U8c/hqdefault.jpg",
        description: "7 Minutes of Dark Trance Euphoria"
    },
    {
        title: "You've Never Heard Celtic Ritual Techno Like This 🔥 Reborn from 800 AD",
        url: "https://www.youtube.com/watch?v=y8NmdSx0zI0",
        thumbnail: "https://i.ytimg.com/vi/y8NmdSx0zI0/hqdefault.jpg",
        description: "Celtic Ritual Techno | Reborn from 800 AD"
    },
    {
        title: "You've Never Heard Techno Like This 🔥 Celtic Fire Ritual",
        url: "https://www.youtube.com/watch?v=nijPhLvWt6Y",
        thumbnail: "https://i.ytimg.com/vi/nijPhLvWt6Y/hqdefault.jpg",
        description: "You've Never Heard Techno Like This | Celtic Fire Ritual"
    },
    {
        title: "TRIBAL RITUAL TECHNO TRANCE EDM",
        url: "https://www.youtube.com/watch?v=UsGDQ5Go7EM",
        thumbnail: "https://i.ytimg.com/vi/UsGDQ5Go7EM/hqdefault.jpg",
        description: "TRIBAL RITUAL TECHNO TRANCE EDM"
    },
    {
        title: "Your Next Favorite Melodic Trance Track - Pure Euphoria",
        url: "https://www.youtube.com/watch?v=5mVirObUg6U",
        thumbnail: "https://i.ytimg.com/vi/5mVirObUg6U/hqdefault.jpg",
        description: "Your Next Favorite Melodic Trance Track - Pure Euphoria"
    },
    {
        title: "Operatic Dark Techno That Hits Like a Wrecking Ball ⚡ DARK RITUAL",
        url: "https://www.youtube.com/watch?v=G2rq5TDt5l8",
        thumbnail: "https://i.ytimg.com/vi/G2rq5TDt5l8/hqdefault.jpg",
        description: "Operatic Dark Techno That Hits Like a Wrecking Ball | DARK RITUAL"
    },
    {
        title: "Trance Immersive Soundscapes: EDM Ethereal Melodies & Deep Bass Foundations",
        url: "https://www.youtube.com/watch?v=Oy_LFQMPtgI",
        thumbnail: "https://i.ytimg.com/vi/Oy_LFQMPtgI/hqdefault.jpg",
        description: "EDM Ethereal Melodies & Deep Bass Foundations"
    },
    {
        title: "Panzerkraft Returns: 60 Minutes of Pure Sonic Warfare | Dark Heavy Brutal",
        url: "https://www.youtube.com/watch?v=YKZliB1N5vE",
        thumbnail: "https://i.ytimg.com/vi/YKZliB1N5vE/hqdefault.jpg",
        description: "60 Minutes of Pure Sonic Warfare | Dark Heavy Brutal"
    },
    {
        title: "Lost in the Rhythm: Dark Synthwave & Melodic Techno",
        url: "https://www.youtube.com/watch?v=UWHduNAH8ik",
        thumbnail: "https://i.ytimg.com/vi/UWHduNAH8ik/hqdefault.jpg",
        description: "Dark Synthwave & Melodic Techno"
    },
    {
        title: "EDM TRANCE + HIMALAYA = True | Official Music Video 4K",
        url: "https://www.youtube.com/watch?v=wfxt2SXADAc",
        thumbnail: "https://i.ytimg.com/vi/wfxt2SXADAc/hqdefault.jpg",
        description: "EDM Trance + Himalaya | Official Music Video 4K"
    },
    {
        title: "EDM Energy | Female DJ Midtempo Live Set Dance Mix Cinema 4K",
        url: "https://www.youtube.com/watch?v=7V35FkMPk1U",
        thumbnail: "https://i.ytimg.com/vi/7V35FkMPk1U/hqdefault.jpg",
        description: "Female DJ Midtempo Live Set Dance Mix Cinema 4K"
    },
    {
        title: "AI Visual Art So Good It Doesn't Look Real, Experimental 4K Music Video",
        url: "https://www.youtube.com/watch?v=xOKjKlzBMQI",
        thumbnail: "https://i.ytimg.com/vi/xOKjKlzBMQI/hqdefault.jpg",
        description: "Experimental 4K Music Video"
    },
    {
        title: "House Indietronic Melodic Mix | Calming Relaxing Freedom",
        url: "https://www.youtube.com/watch?v=lIV1R4dTHwQ",
        thumbnail: "https://i.ytimg.com/vi/lIV1R4dTHwQ/hqdefault.jpg",
        description: "House Indietronic Melodic Mix | Calming Relaxing Freedom"
    },
    {
        title: "Enchanting Melodic Techno x Trance | Immersive EDM Atmosphere",
        url: "https://www.youtube.com/watch?v=1NZHM3UKiH0",
        thumbnail: "https://i.ytimg.com/vi/1NZHM3UKiH0/hqdefault.jpg",
        description: "Enchanting Melodic Techno x Trance | Immersive EDM Atmosphere"
    },
    {
        title: "TECTONIC BASS WARFARE | Cyberpunk Combat Music | Subwoofer Destroyer 2026",
        url: "https://www.youtube.com/watch?v=gutJmwKNubo",
        thumbnail: "https://i.ytimg.com/vi/gutJmwKNubo/hqdefault.jpg",
        description: "Cyberpunk Combat Music | Subwoofer Destroyer 2026"
    },
    {
        title: "SONJA´S WORKOUT MIX 🥊 | Motivation Audio Visuals with Sonja",
        url: "https://www.youtube.com/watch?v=1V0UQTVKBL4",
        thumbnail: "https://i.ytimg.com/vi/1V0UQTVKBL4/hqdefault.jpg",
        description: "Motivation Audio Visuals with Sonja - Beats that push you harder!"
    },
    {
        title: "PANZERKRAFT vs THE BEAST 🔥 BASS BOOSTED TECHNO MIX",
        url: "https://www.youtube.com/watch?v=DAg7hD5j2po",
        thumbnail: "https://i.ytimg.com/vi/DAg7hD5j2po/hqdefault.jpg",
        description: "BASS BOOSTED TECHNO MIX | SUBWOOFER SHAKER 2026"
    },
    {
        title: "Panzerkraft - Heavy Industrial Bass Mix",
        url: "https://www.youtube.com/watch?v=sXWtR-58WKo",
        thumbnail: "https://i.ytimg.com/vi/sXWtR-58WKo/hqdefault.jpg",
        description: "Dark Techno Cyberpunk Driving Gaming Gym Music Video 4K"
    },
    {
        title: "Dark Pop Cinematic RnB - Prisoner",
        url: "https://www.youtube.com/watch?v=t5efOUF8hNM",
        thumbnail: "https://i.ytimg.com/vi/t5efOUF8hNM/hqdefault.jpg",
        description: "DJ Grand Daddy ft. Sonja - Dark Pop / Cinematic R&B"
    },
    {
        title: "EPIC CATHEDRAL TRANCE 2026",
        url: "https://www.youtube.com/watch?v=YNJp_KlFAqg",
        thumbnail: "https://i.ytimg.com/vi/YNJp_KlFAqg/hqdefault.jpg",
        description: "24 Minutes of Majestic Energy - Latin Vocals & High-Fidelity Beats"
    },
    {
        title: "CYBERSONIC EVOLUTION 2026",
        url: "https://www.youtube.com/watch?v=Vzsgx23GzDo",
        thumbnail: "https://i.ytimg.com/vi/Vzsgx23GzDo/hqdefault.jpg",
        description: "Terminator Style Dark Synth & Cyberpunk Mix"
    },
    {
        title: "Porcelain Lies",
        url: "https://www.youtube.com/watch?v=czVG0xu1o7M",
        thumbnail: "https://i.ytimg.com/vi/czVG0xu1o7M/hqdefault.jpg",
        description: "DJ Grand Daddy ft. Sonja - Official Visualizer"
    },
    {
        title: "Amsterdam Trance Timeless",
        url: "https://www.youtube.com/watch?v=N_dDVJ1qF_8",
        thumbnail: "https://i.ytimg.com/vi/N_dDVJ1qF_8/hqdefault.jpg",
        description: "Uplifting Vocal Trance 138 BPM - A Tribute to Amsterdam"
    },
    {
        title: "AMBIENT SYNTHWAVE & RETROWAVE",
        url: "https://www.youtube.com/watch?v=1UitqbVlXBg",
        thumbnail: "https://i.ytimg.com/vi/1UitqbVlXBg/hqdefault.jpg",
        description: "Cyberpunk Music for Chill & Focus - Neon Dreams"
    },
    {
        title: "ICELAND - Cinematic Ambient Pop",
        url: "https://www.youtube.com/watch?v=9Vu4YnML_VE",
        thumbnail: "https://i.ytimg.com/vi/9Vu4YnML_VE/hqdefault.jpg",
        description: "Ethereal Ballad - Synthwave Uplifting Trance Music Video 4K"
    },
    {
        title: "Ambient Synthwave, Icelandic Lava Coast",
        url: "https://www.youtube.com/watch?v=trA5juKxMxw",
        thumbnail: "https://i.ytimg.com/vi/trA5juKxMxw/hqdefault.jpg",
        description: "Cinematic nature magic for Focus & Relaxing Sonic Therapy"
    }
];

// Extract YouTube video ID from a watch URL
function getYouTubeId(url) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : "";
}

// Render latest release on the home page
function renderLatestVideo() {
    const latestContainer = document.querySelector("[data-latest-video]");

    if (!latestContainer || videos.length === 0) {
        return;
    }

    const video = videos[0];
    const videoId = getYouTubeId(video.url);

    latestContainer.innerHTML = `
        <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/${videoId}"
            title="${video.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>

        <div class="featured-info">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        </div>
    `;
}

// Render all videos on the music page
function renderVideoGallery() {
    const videoGrid = document.querySelector("[data-video-grid]");

    if (!videoGrid) {
        return;
    }

    videoGrid.innerHTML = videos
        .map((video, index) => {
            const lazyLoading = index > 2 ? ' loading="lazy"' : "";

            return `
                <div class="video-card">
                    <a
                        href="${video.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="video-thumbnail">
                            <img
                                src="${video.thumbnail}"
                                alt="${video.title}"
                                ${lazyLoading}
                            >
                            <div class="play-overlay">
                                <div class="play-button">▶</div>
                            </div>
                        </div>
                    </a>

                    <div class="video-info">
                        <h3>${video.title}</h3>
                        <p>${video.description}</p>
                    </div>
                </div>
            `;
        })
        .join("");
}

renderLatestVideo();
renderVideoGallery();
