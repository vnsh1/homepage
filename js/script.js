{
    const welcome = () => {
        console.log("Cześć! Witam wszystkich odwiedzających moją stronę");
    }

    const toggleBackround = () => {

        const bodyElement = document.querySelector(".js-body");
        const themeNameElement = document.querySelector(".js-themeName")

        bodyElement.classList.toggle("body--darkTheme");
        themeNameElement.innerText = bodyElement.classList.contains("body--darkTheme")
            ? " jasne"
            : " ciemne";
    };

    const toggleImage = () => {

        const imageElement = document.querySelector(".js-image")
        const changeTextElement = document.querySelector(".js-changeText")

        imageElement.classList.toggle("hidden");
        changeTextElement.innerText = imageElement.classList.contains("hidden")
            ? "Pokaż"
            : "Usuń";
    };

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", toggleBackround);

        const imageButton = document.querySelector(".js-imageButton");
        imageButton.addEventListener("click", toggleImage);

    }

    welcome();

    init();

}