//1st eh
window.alert("Welcome! To my Portfolio");


// tong sa heading or ika 2
const nameHeading = document.getElementById("intro");
nameHeading.innerText = "Welcome to My Portfolio!";

// tong force ilis ka color or ika 3
const navbar = document.querySelector(".navbar");
navbar.style.backgroundColor = "gray";


// tong dark mode or ika 4
const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerText = "Light Mode";
    } else {
        themeButton.innerText = "Dark Mode";
    }
});

//tong event kag info 5 and 7
const personalInfo = document.getElementById("personal-info");
const infoButton = document.getElementById("info-btn");

function showInfo() {

    if (personalInfo.innerText === "") {
        personalInfo.innerText =
        "Nickname: Harie";

        infoButton.innerText = "Hide My Information";

    } else {
        personalInfo.innerText = "";
        infoButton.innerText = "Show My Information";
    }

}
//ika 6 sa requirements
console.log("JavaScript is connected!");



//tong ika last or ika 8
function showStatus() {
    console.log("Portfolio is working!");
}

showStatus();