const saveToLocalStorage = (digimon) => {

    let favorites = getlocalStorage();

    localStorage.setItem("Favorites", json.stringify(digimon));
}

const getLocalStorage = () => {

    let localStorageData = localStorage.getItem("Favorites");

    if(localStorageData === null)
    {
        return [];
    }

    return json.parse(localStorageData);

}

const removeFromLocalStorage = () => {

}