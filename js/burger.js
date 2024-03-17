const burger = document.querySelector(".header__burger-wrapper");
const burgerContent = document.querySelector(".header__burger-nav-wrapper");


burger.addEventListener("click", () => {
    document.querySelector('.header__burger').classList.toggle("active");
    burgerContent.classList.toggle("active")
})