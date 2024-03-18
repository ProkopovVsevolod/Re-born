const burger = document.querySelector(".header__burger-wrapper");
const burgerContent = document.querySelector(".header__burger-nav-wrapper");
const accordion = document.querySelector(".header__accordion");

burger.addEventListener("click", () => {
    document.querySelector('.header__burger').classList.toggle("active");
    burgerContent.classList.toggle("active");
    document.querySelector('.header__list').classList.toggle("active");
})

accordion.addEventListener("click", () => {
    document.querySelector('.header__mobile-menu').classList.toggle("active");
    accordion.classList.toggle("active");
    document.querySelector('[data-accordeonContent]').classList.toggle("hidden");
    
})
