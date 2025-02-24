/**
 * Need to add functionality to this. Need to utilize the json file to generate words.
 * My hurdle is the get the words appear in random order but also block into individual
 * divs and in the divs are spans for each letter. Each letter should have a unique ID
 */

document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("word-list");
    const logoToggler = document.getElementById("logo");
    const keyboardButton = document.getAnimations("btn-keyboard");


    const leaderBoard = document.getElementById("btn-leaderboard");
    const table = document.getElementById("leaderboard")

    const notifier = document.getElementById("btn-notifications")
    const notifierBoard = document.getElementById("notification-board")
    
    if (!text) {
        console.error("Element with ID 'word-list' not found.");
        return;
    }

    fetch("./json/words.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);

            for(let j = 0; j < data.wordList.length; j++) {
                let randomNumber = Math.floor(Math.random()*data.wordList.length)
                let element = data.wordList[randomNumber]
                for (let i = 0; i < element.length; i++) {
                    text.insertAdjacentHTML("beforeend", `<span>${element.charAt(i)}</span>`);
                }
                text.insertAdjacentHTML("beforeend", "<span> </span>");
            }
            console.log(text);
        })
        .catch(error => console.error("Error loading JSON:", error));

    leaderBoard.onclick = () => {
        console.log("Leaderboard button clicked!")
        table.classList.toggle("show")
    }

    notifier.onclick = () => {
        console.log("Notifictaions button clicked!")
        notifierBoard.classList.toggle("show")
    }

    
});
