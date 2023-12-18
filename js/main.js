const accordion = document.querySelectorAll("[data-accordion]");
const anchors = document.querySelectorAll("[anchorButton]");
const burger = document.querySelector(".header__burger-wrapper");

accordion.forEach(accordionTitle => {
    accordionTitle.addEventListener("click", () => {
        accordionTitle.classList.toggle('active');
        accordionTitle.lastElementChild.classList.toggle("hidden")
    })
})

anchors.forEach(anchor => {
    anchor.addEventListener("click", () => {
        anchors.forEach(anchor => {
            anchor.classList.remove("active")
        })
        anchor.classList.add('active');
    })
})

burger.addEventListener("click", () => {
    document.querySelector('.header__burger').classList.toggle("active");
})