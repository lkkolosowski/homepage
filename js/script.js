{
  const sayHello = () => {
    console.log("Cześć! Ten kod jest już w repozytorium Git.");
  };

  const imageChange = () => {
    const image = document.querySelector(".js-image");
    const arrows = document.querySelectorAll(".js-arrow");
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        image.src = image.src.includes("lukasz.jpg")
          ? "images/tymoteusz.jpg"
          : "images/lukasz.jpg";
      });
    });

    image.addEventListener("click", () => {
      image.src = image.src.includes("lukasz.jpg")
        ? "images/tymoteusz.jpg"
        : "images/lukasz.jpg";
    });
  };

  const themeChange = () => {
    const body = document.querySelector(".body");
    const changeThemeButton = document.querySelector(".js-button");
    const changeText = document.querySelector(".js-text");
    const changeHeart = document.querySelector(".js-heart");
    changeThemeButton.addEventListener("click", () => {
      body.classList.toggle("js-dark-theme");

      changeText.innerText = body.classList.contains("js-dark-theme")
        ? "Jasny"
        : "Ciemny";
      changeHeart.innerText = body.classList.contains("js-dark-theme")
        ? "🤍"
        : "🖤";
    });
  };

  const getMyAge = () => {
    const jsAge = document.querySelector(".js-age");
    const birthdate = new Date("1997-08-11");
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();

    if (
      currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() &&
        currentDate.getDate() < birthdate.getDate())
    ) {
      age--;
    }

    jsAge.innerText = age;
  };

  const init = () => {
    imageChange();
    themeChange();
    getMyAge();
    sayHello();
  };

  init();
}
