const burger = document.querySelector(".header__burger-wrapper");

burger.addEventListener("click", () => {
    document.querySelector('.header__burger').classList.toggle("active");
})