const intro = document.getElementById("intro");
const topLayer = document.getElementById("topLayer")
const saturn = document.getElementById("saturn")
const Saturnwrapper = document.getElementById("wrapper")
const marswrapper = document.getElementById("marsWrapper")
const mars = document.getElementById("mars")

const profile = document.getElementById("profile")
const Muneeb = document.getElementById("Muneeb")
const stars = document.getElementById("stars")
const links = document.getElementById("links")
const aboutMe = document.getElementById("aboutMe")
const interestCard = document.getElementById("interestCard")
const skillsCard = document.getElementById("skillsCard")


for (let i = 0; i < 300; i++) {
    const star = document.createElement("div")
    star.classList.add("star")
    star.style.left = Math.random() * 100 + "%"
    star.style.top = Math.random() * 100 + "%"

    const size = Math.random() * 2;
    star.style.width = size + "vh";
    star.style.height = size + "vh";

    star.style.animationDuration = (Math.random() * 3 + 1) + "s";
    stars.appendChild(star)

}

const songs = [{
    name: "She Said No",
    artist: "Boywithuke",
    src: "./She Said No.mp3"
},

{
    name: "Hotel Room",
    artist: "Ax And The Hatchetmen",
    src: "./hotel room.mp3"
},

{
    name: "Blurry lights",
    artist: "Ax And The Hatchetmen",
    src: "./blurry lights.mp3"
},
{
    name: "Ghost",
    artist: "Boywtihuke",
    src: "./Ghost.mp3"
},
{
    name: "King Of Nothing",
    artist: "Boywtihuke",
    src: "./King Of Nothing.mp3"
},
{
    name: "Lover Girl",
    artist: "Laufey",
    src: "./Lover Girl.mp3"
},
{
    name: "From The Start",
    artist: "Laufey",
    src: "./from the start.mp3"
}]

const player = document.getElementById("songPlayer")
const playPauseButton = document.getElementById("pauseButton")
const nextButton = document.getElementById("skipButton")
const previousButton = document.getElementById("previousButton")
const songName = document.getElementById("songName")
const artistName = document.getElementById("artistName")
const musicControls = document.getElementById("musicControls")
const musicDisc = document.getElementById("musicDisc")

let currentSong;

function playSong(index) {
    currentSong = index
    player.src = songs[index].src
    songName.textContent = songs[index].name
    artistName.textContent = songs[index].artist

    player.play()

    playPauseButton.textContent = "⏸"
}

function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    playSong(randomIndex);
}

playPauseButton.addEventListener('click', () => {
    if (player.paused) {
        player.play();
        playPauseButton.textContent = "⏸";
    } else {
        player.pause();
        playPauseButton.textContent = "▶";
    }
});

nextButton.addEventListener('click', () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0
    }

    playSong(currentSong)
})

previousButton.addEventListener('click', () => {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    playSong(currentSong);
})

player.addEventListener('ended', () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    playSong(currentSong)
})

let isOpen = false;

function expandControls() {
    if (!isOpen) {
        musicControls.classList.add("open")
        isOpen = true

        setTimeout(() => {
            if (isOpen) {
                musicControls.classList.remove("open")
                isOpen = false
            }
        }, 5000)

    } else {
        musicControls.classList.remove("open")
        isOpen = false;
    }
}

musicDisc.addEventListener('click', () => {
    expandControls()
})


document.addEventListener("click", () => {
    intro.classList.add("fadeOut")
    topLayer.classList.add("mainContent")
    saturn.classList.add("mainContent")
    Saturnwrapper.classList.add("mainContent")
    marswrapper.classList.add("mainContent")
    mars.classList.add("mainContent")
    profile.classList.add("mainContent")
    Muneeb.classList.add("mainContent")
    links.classList.add("mainContent")
    aboutMe.classList.add("mainContent")
    interestCard.classList.add("mainContent")
    skillsCard.classList.add("mainContent")
    musicControls.classList.add("mainContent")
    playRandomSong()

}, { once: true });
