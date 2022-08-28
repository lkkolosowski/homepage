console.log("Cześć!");

let body = document.querySelector(".body");
let changeThemeButton = document.querySelector(".js-button");
let changeText = document.querySelector(".js-text");

changeThemeButton.addEventListener("click", () => {
    body.classList.toggle("js-dark-theme");

    changeText.innerText = body.classList.contains("js-dark-theme") ? "jasny" : "ciemny";
});