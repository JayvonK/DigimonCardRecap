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
    console.log(data);
    return data;
}

const digimonApi2 = async () => {
    const promise = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await promise.json();
    console.log(data);
    return data;
}

digimonApi2();

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

getFavoritesBtn.addEventListener('click', () => {
    //This retrieves our data from local storage and stores it into favorites variable.
    let favorites = getLocalStorage();

    //Clears getFavoritesDiv so the Array display will not constantly repeat.
    getFavoritesDiv.textContent = "";

    favorites.map(digimonName => {
        let p = document.createElement("p");
        p.textContent = digimonName;
        getFavoritesDiv.append(p);
    })
})

//https://digimon-api.vercel.app/api/digimon