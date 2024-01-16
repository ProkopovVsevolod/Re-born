const heroBlock = document.querySelector('[data-animation="start"]');
const endBlock = document.querySelector('[data-animation="end"]');

const positionOfEndBlock = endBlock.getBoundingClientRect();
let rect = heroBlock.getBoundingClientRect();

const html = `<div class="w50"></div>`

if (rect.top <= 210 ) {
    heroBlock.parentNode.insertAdjacentHTML("afterbegin", html);
}

window.addEventListener('scroll', function() {
    rect = heroBlock.getBoundingClientRect();
    console.log(rect.top)
    if (rect.top = 210) {
        
     // Блок находится в области видимости, примените анимацию
        heroBlock.classList.add('animate');
    } else if (positionOfEndBlock.top === 10  ) {
     // Блок не в области видимости, удалите анимацию
        heroBlock.classList.remove('animate');
    }
   });