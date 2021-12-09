$(function () {
    weatherFromCities(putData);
});

const container = $('.container');
container.prepend('<h1 style=color:purple>Weather app of Israel cities </h1>');
let list = $('#options');
let option = $('option');

$.get('il.cities.json', data => {
    console.log(data);
    $.each(data, function (i, ilCity) {
        let cityToString = JSON.stringify(ilCity.city)
        list.append(`<option>${JSON.parse(cityToString)}</option>`);
    });
});

function weatherFromCities(cb) {
    $(list).change(function (city) {
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