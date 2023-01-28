const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'faaf4e4aa75fbebf6d5582c587518d61';

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query)
    .then(weather => {
        return weather.json();
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`
    
    let temp = document.querySelector('.temp');
    temp.innerText = `${result.main.temp}°C`

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C /
    ${Math.round(result.main.temp_max)}°C`
}



const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)