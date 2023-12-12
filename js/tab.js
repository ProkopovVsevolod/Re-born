const accordion = document.querySelectorAll("#accordion");
const tabButton = document.querySelectorAll("#tabButton");


accordion.forEach(accordionTitle => {
    accordionTitle.addEventListener("click", () => {
        accordionTitle.classList.toggle('active');
        accordionTitle.lastElementChild.classList.toggle("hidden")
    })
})

// tabButton.forEach(tab => {
//     tab.addEventListener("click", () => {
//         tab.classList.toggle('active');
//     })
// })