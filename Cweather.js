$(function () {
    weatherFromCities(putData)
});

const container = $('.container');
container.prepend('<h1 style=color:purple>Weather App</h1>');

function weatherFromCities(cb) {
    let list = $('#options');
    $(list).change(function (city) {
        //debugger;
        city = this.value;
        $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=590750d4091653d153864c26c2670af8`, weatherData => {
            cb(weatherData);
        });
    });
};

let putData = (WeatherData) => {
    let ul = document.querySelector('ul');
    ul.innerHTML = ""
    $.each(WeatherData.main, (key, value) => {
        ul.innerHTML += `${key} : ${value} <br>`;
    });
}