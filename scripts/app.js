import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localStorage.js";
//Ids

let digimonImg = document.getElementById("digimonImg");
let digimonName = document.getElementById("digimonName");
let digimonStatus = document.getElementById("digimonStatus");
let digimonInput = document.getElementById("digimonInput");
let favoriteBtn = document.getElementById("favoriteBtn");
let getFavoritesBtn = document.getElementById("getFavoritesBtn");
let getFavoritesDiv = document.getElementById("getFavoritesDiv");

let digimon = "";


const digimonApi = async (digimon) => {
    const promise = await fetch('https://digimon-api.vercel.app/api/digimon/name/' + digimon);
    const data = await promise.json();
    // console.log(data);
    return data;
}

digimonInput.addEventListener('keydown', async (event) => {
    //On enter I want this function to run
    if(event.key === 'Enter')
    {
        digimon = await digimonApi(event.target.value);
        digimonImg.src = digimon[0].img;
        digimonName.textContent = digimon[0].name;
        digimonStatus.textContent = digimon[0].level;
    }
})

favoriteBtn.addEventListener('click', (event) => {
    saveToLocalStorage(digimon[0].name);
})



//https://digimon-api.vercel.app/api/digimon