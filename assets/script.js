var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var searchHistoryContainerEl = document.querySelector("#city-history");

//userFormEl.addEventListener("submit", function() {
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl + '&appid=3b1abd2025ab8799eea90bf08dc79a30')
   // .then(response => response.json())
  //  .then(data => console.log(data))

 //   .catch(err => alert("Error"))
//})

var getCityWeatherDay = function(city) {
     //change url to inculde city and required items
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=29.4252&lon=98.4946&appid=3b1abd2025ab8799eea90bf08dc79a30";

    // make api request
    fetch(apiUrl)
      .then(function(response) {
        // if response works
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                //displayWeatherInfo(data, city);
           });
        } else {
            alert('Error: No Data Found!');
        }
      })
      .catch(function(error) {
        alert("Unable to connect to weather service.");
      });
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        getCityWeatherDay(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a valid city!");
    }
    console.log(event);
};

var displayWeatherInfo = function() {

};

userFormEl.addEventListener("submit", formSubmitHandler);
