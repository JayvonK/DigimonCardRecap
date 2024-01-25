const digimonApi = async () => {
    const promise = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await promise.json();
    console.log(data);
}

digimonApi();

//https://digimon-api.vercel.app/api/digimon