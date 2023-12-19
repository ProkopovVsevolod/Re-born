const accordion = document.querySelectorAll("[data-accordion]");
const anchors = document.querySelectorAll("[data-id='anchorButton']");



accordion.forEach(accordionTitle => {
    accordionTitle.addEventListener("click", () => {
        accordionTitle.classList.toggle('active');
        accordionTitle.children[0].classList.toggle("active");
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



// const flag = document.querySelector("#flag");
// const submitBtn = document.querySelector("#submitButton");


// if (flag.checked) {
//     submitBtn.disabled = false;
// } else { submitBtn.disabled = true;}
