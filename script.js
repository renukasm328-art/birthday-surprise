function openBirthday() {

    document.getElementById("welcome").style.display = "none";

    document
        .getElementById("birthday")
        .classList.remove("hidden");

}


function openMessage() {

    document
        .getElementById("message")
        .classList.remove("hidden");

    document.getElementById("giftText").innerHTML =
        "Your surprise has been opened! 💖";

}


function toggleMusic() {

    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {

        music.play();

        button.innerHTML = "⏸️ Pause Music";

    } else {

        music.pause();

        button.innerHTML = "🎵 Play Music";

    }

}


function showFinalMessage() {

    const finalMessage =
        document.getElementById("finalMessage");

    finalMessage.classList.remove("hidden");

    finalMessage.style.display = "block";

}