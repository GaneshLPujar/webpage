const containerE1 = document.querySelector(".container")

const btnE1 = document.querySelector(".btn")

const popupContainerE1 = document.querySelector(".popup-container")

const closeIcone1 = document.querySelector(".close-icon")

btnE1.addEventListener("click",()=>{
    containerE1.classList.add("active")
    popupContainerE1.classList.remove("active")
});

closeIcone1.addEventListener("click",()=>{
    containerE1.classList.remove("active")
    popupContainerE1.classList.add("active")
});

