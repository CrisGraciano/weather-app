var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var searchHistoryContainerEl = document.querySelector("#city-history");

var getCityWeatherDay = function(city) {
    // change url to inculde city and required items
    var apiUrl = //"enter api here"

    // make api request
    fetch(apiUrl)
      .then(function(response) {
        // if response works
        if (response.ok) {
            response.json().then(function(data) {
                displayWeatherInfo(data, city);
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

    var city = cityInputEl.ariaValueMax.trim();

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
