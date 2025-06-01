const getWeatherButton = document.querySelector('button')

getWeatherButton.addEventListener('click',(e) => {
    const cityName = document.querySelector('input').value
    getWeather(cityName.toLowerCase())
})

function getWeather(city){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=6a7c10274f13321f2c2c3730572e897b`).
then((res)=>{
 return res.json()
}).then((res)=>{
    // console.log(res['0']['name'])
    // console.log(res['0']['lat'])
    // console.log(res['0']['lon'])
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res['0']['lat']}&lon=${res['0']['lon']}&appid=6a7c10274f13321f2c2c3730572e897b`)
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        console.log(data.name)
        console.log(data.main.temp)
        console.log(data.weather[0].description)
        console.log(data.weather[0].icon)
        displayInfo(data)
    }).catch((err)=>{
        console.log(`Error ${err}`)
    })
}).catch((err)=>{
    console.log(`Error: ${err}`)
})
}


function displayInfo(data){
    // const weatherInfo = document.createElement('ol')
    // const cityName = `<li>${data.name}</li>`
    // const temp = data.main.temp
    const icon = `src/images/${data.weather[0].icon}_t@2x.png`
    
    // const description = data.weather[0].description

    document.querySelector('#city').innerHTML = data.name
    document.querySelector('#temp').innerHTML = data.main.temp
    document.querySelector('#icon').innerHTML = `<img src="${icon}" alt=""></img>`
    document.querySelector('#description').innerHTML = data.weather[0].description

}


