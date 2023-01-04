const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const search = document.querySelector("#search");

getWeatherData = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await url.json();

    showWeatherData(data);

}

showWeatherData = (data) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    const dt = new Date(data.dt * 1000);
    weather.innerHTML = `
        <div class="item">
                    <div class="tmp">
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                        <p class="tmpe">${data.main.temp} ℃<span>|℉</span></p>
                        <div class="dt">
                            <p class="temp">${data.name}</p>
                            <p class="temp"><span>${days[dt.getDay()] + " , " + dt.toLocaleTimeString()}</span></p>
                            <p class="temp"><span>${data.weather[0].main}</span></p>
                     </div>
        </div>

    `


}


document.querySelector("form").addEventListener("submit", (event) => {
    getWeatherData(search.value);
    event.preventDefault();
})

let a=1;
amin = () =>{
    if(a<=5){
        document.querySelector("#anim").innerHTML = `<img src="img/${a}.gif" width="100px">`;
    }else{
        a=1;
    }
    a++;
}
setInterval(()=>{
    amin();
},2000)





















































// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
