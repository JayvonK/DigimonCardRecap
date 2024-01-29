const saveToLocalStorage = (digimon) => {
    //favorites will get the current values in local storage
    //AKA saves the array in favorites
    let favorites = getLocalStorage();

    //If the name is already included in the local storage we will not push into favorites
    if(!favorites.includes(digimon)){
        favorites.push(digimon);
    }
    //JSON.stringify This ensures what ever we savei nto local storage is a string
    localStorage.setItem("Favorites", JSON.stringify(favorites));
}

const getLocalStorage = () => {
    //Getting our values from local storage
    let localStorageData = localStorage.getItem("Favorites");

    //We check if that data is null if so we return an empty array
    if(localStorageData === null)
    {
        return [];
    }

    //We return an array of local storage
    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (digimon) => {
    let favorites = getLocalStorage();

    let namedIndex = favorites.indexOf(digimon);

    favorites.splice(namedIndex, 1);

    localStorage.setItem("Favorites", JSON.stringify(favorites));

}