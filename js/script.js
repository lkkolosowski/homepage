{
  console.log("Cześć! Ten kod jest już w repozytorium Git.");

  const body = document.querySelector(".body");
  const changeThemeButton = document.querySelector(".js-button");
  const changeText = document.querySelector(".js-text");
  const image = document.querySelector(".js-image");

  const imageChange = () => {
    image.addEventListener("click", () => {
      image.src = image.src.includes("lukasz.jpg") ? "images/tymoteusz.jpg" : "images/lukasz.jpg";
    });
  };

  const themeChange = () => {
    changeThemeButton.addEventListener("click", () => {
      body.classList.toggle("js-dark-theme");

      changeText.innerText = body.classList.contains("js-dark-theme") ? "jasny" : "ciemny";
    });
  };

  const init = () => {
    imageChange();
    themeChange();
  };

  init();
}
