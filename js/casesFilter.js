const filterBtn = document.querySelectorAll("[data-filterId]");
const filterItem = document.querySelectorAll(".cases__filter-item");

const servicesCounter = document.querySelector("#servicesCounter");
const sphereCounter = document.querySelector("#sphereCounter");
const siteTypesCounter = document.querySelector("#siteTypesCounter");

//массивы для отображения 
const servicesFilters = [];
const sphereFilters = [];
const siteTypesFilters = [];

//обработчик клика по фильтру
filterItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        console.log(item.id)

        if(item.dataset.filter === "services") {
            let isHaveData = servicesFilters.indexOf(item.id);
            if (~isHaveData) servicesFilters.splice(isHaveData, 1);
            else servicesFilters.push(item.id)
            
            console.log(servicesFilters);

            
            if (servicesFilters.length != 0) {
                servicesCounter.innerHTML = `${servicesFilters.length}`; 
            } else servicesCounter.innerHTML = '';
        }

        if(item.dataset.filter === "sphere") {
            let isHaveData = sphereFilters.indexOf(item.id);
            if (~isHaveData) sphereFilters.splice(isHaveData, 1);
            else sphereFilters.push(item.id)
            
            console.log(sphereFilters);

            if (sphereFilters.length != 0) {
                sphereCounter.innerHTML = `${sphereFilters.length}`; 
            } else sphereCounter.innerHTML = '';
        }
    })
})


filterBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtn.forEach(button => {
            button.classList.remove('active');
        });
        e.target.classList.add("active")


        const clickedBtnId = e.target.dataset.filterid;
        const activeContent = document.querySelector(`.cases__filter-wrapper[data-content="${clickedBtnId}"]`);
        const notActiveContnent = document.querySelector('.cases__filter-wrapper:not(.hidden)');

        if (notActiveContnent && notActiveContnent === activeContent) {
            activeContent.classList.add('hidden');
        } else {
            if (notActiveContnent) {
                notActiveContnent.classList.add('hidden');
            }

            activeContent.classList.remove('hidden')
        }
    })
})






