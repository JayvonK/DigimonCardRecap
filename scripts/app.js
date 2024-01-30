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
    if (event.key === 'Enter') {
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

    favorites.map(digiName => {
        //creating a p tag dynamically
        let p = document.createElement("p");

        //Setting its textContent to digiName
        p.textContent = digiName;

        //className replaces all classes with new classes
        p.className = "text-lg font-medium text-gray-900 dark:text-white";

        //Creating a button dynamically
        let button = document.createElement("button");
        button.type = "button";
        button.textContent = "X";
        
        //classList alows us to be more concise it doesn't replace all classes.
        button.classList.add(
            "text-gray-400",
            "bg-transparent",
            "hover:bg-gray-200",
            "hover:text-gray-900",
            "rounded-lg",
            "text-sm",
            "w-8",
            "h-8",
            "justify-end",
            "dark:hover:bg-gray-600",
            "dark:hover:text-white"
        );

        //creating and addEventListener for our button which removes digiName from our favorites
        button.addEventListener('click', () => {

            removeFromLocalStorage(digiName);

            p.remove();
        })
        //appending our button to our p-tag
        p.append(button);
        //appending our p-tag to our favoritesDiv
        getFavoritesDiv.append(p);

    })
})

//https://digimon-api.vercel.app/api/digimon