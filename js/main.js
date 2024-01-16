const accordion = document.querySelectorAll("[data-accordion]");
const anchors = document.querySelectorAll("[data-id='anchorButton']");
const dropbtn = document.querySelectorAll(".header__dropbtn");
const dropdownContent = document.querySelector(".header__dropdown-content");


console.log(dropbtn)
dropbtn.forEach(button => {
    button.addEventListener("mouseenter", (e) => {
        console.log(e.target)
        // dropdownContent.classList.add("active");
        console.log(e.target.children[1].classList.add("active"))
    })
});

dropdownContent.addEventListener("mouseleave", (e) => {
    e.stopPropagation();
    dropdownContent.classList.remove("active");   
})



accordion.forEach(accordionTitle => {
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




