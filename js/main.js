const accordionPrincipes = document.querySelectorAll("[data-accordion]");
const anchors = document.querySelectorAll("[data-id='anchorButton']");
const dropbtn = document.querySelectorAll(".header__dropbtn");
const dropdownContent = document.querySelector(".header__dropdown-content");
const ndaColletion = document.querySelectorAll("[data-nda]");


accordionPrincipes.forEach(accordionTitle => {
    accordionTitle.addEventListener("click", () => {
        accordionTitle.classList.toggle('active');
        accordionTitle.children[0].classList.toggle("active");
        accordionTitle.children[1].classList.toggle("active");
        accordionTitle.lastElementChild.classList.toggle("hidden");
    })
})


anchors.forEach(anchor => {
    anchor.addEventListener("click", () => {
        anchors.forEach(anchor => {
            anchor.classList.remove("active");
        })
        anchor.classList.add('active');
    })
})



ndaColletion.forEach(nda => {
    nda.addEventListener("mouseover", () => {
        nda.classList.add("active");
    })

    nda.addEventListener("mouseout", () => {
        nda.classList.remove("active");
    })
})







