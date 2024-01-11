const sectionElement = document.querySelectorAll("[data-section='mouseHover']");

console.log(sectionElement)
sectionElement.forEach(section => {

    section.addEventListener("mouseover", (e) => {
        e.stopPropagation();
        section.classList.add("active");
        console.log(section.parentNode.parentNode.parentNode.style.backgroundColor = "transparent")
        section.nextSibling.style.backgroundColor = "white";
        section.previousSibling.style.backgroundColor = "white";
        // section.style.backgroundImg = "./../../../img/services/bg-1.png";

    });

    section.addEventListener("mouseout", () => {
        section.classList.remove("active");
    });
})

const addBackgroundImg = (section) => {
    
}