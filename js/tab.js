const accordion = document.querySelectorAll("#accordion");
const anchors = document.querySelectorAll("#anchorButton");


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