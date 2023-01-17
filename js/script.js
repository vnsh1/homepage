console.log("Cześć!");

let buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".js-body");
let themeNameElement = document.querySelector(".js-themeName")

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--darkTheme");

    themeNameElement.innerText = bodyElement.classList.contains("body--darkTheme")
        ? " jasne"
        : " ciemne";
});

let imageButton = document.querySelector(".js-imageButton");
let imageElement = document.querySelector(".js-image")
let changeTextElement = document.querySelector(".js-changeText")

imageButton.addEventListener("click", () => {
    imageElement.classList.toggle("hidden");

    changeTextElement.innerText = imageElement.classList.contains("hidden")
        ? "Pokaż"
        : "Usuń";

});
