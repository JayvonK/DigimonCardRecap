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
    //We're saving local storage data into favorites variable
    let favorites = getLocalStorage();

    //We're finding the Index of our parameter (digimon)
    let namedIndex = favorites.indexOf(digimon);

    //remove the name from the array using the .splice method
    favorites.splice(namedIndex, 1);

    //We set our new mutated favorites array inside our local storage.
    localStorage.setItem("Favorites", JSON.stringify(favorites));

}

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage }