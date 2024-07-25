// console.log("Hello jee Dinesh");

// const API_key = "d4dfa082ea5dc1c2932f5273becde520";

// function renderWeatherInfo(data) {
//   let newPara = document.createElement("p");
//   newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
//   document.body.appendChild(newPara);
// }

// function renderWeatherInfo(data) {
//   if (data && data.main && data.main.temp) {
//     let tempInCelsius = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
//     let newPara = document.createElement('p');
//     newPara.textContent = `${tempInCelsius} °C`;
//     document.body.appendChild(newPara);
//   } else {
//     console.log('Temperature data is not available');
//   }
// }

// function renderWeatherInfo(data) {
//   console.log('renderWeatherInfo called with data:', data);
//   if (data && data.main && data.main.temp) {
//       let tempInCelsius = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
//       let newPara = document.createElement('p');
//       newPara.textContent = `${tempInCelsius} °C`;
//       document.body.appendChild(newPara);
//   } else {
//       console.log('Temperature data is not available');
//   }
// }

// async function fetchWeatherDetails() {
//   try {
//     let city = "goa";

//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
//     );

//     const data = await response.json();

//     console.log("Weather data :->", data);

//     renderWeatherInfo(data);
//   } catch (err) {
//     //handle the error here
//   }
//   //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// }

// async function getCustomWeatherDetails() {
//   try {
//     let latitude = 15.6333;
//     let longitude = 18.3333;

//     let result = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`
//     );

//     let data = await result.json();

//     console.log(data);
//   } catch (error) {
//     console.log("Error FOund" + error);
//   }
// }

// function switchTab(clickedTab) {
//   apiErrorContainer.classList.remove("active");
//   if (clickedTab !== currentTab) {
//     currentTab.classList.remove("current-tab");
//     currentTab = clickedTab;
//     currentTab.classList.add("current-tab");
//     if (!searchFOrm.classList.contains("active")) {
//       userInfoContainer.classList.remove("active");
//       grantAccessContainer.classList.remove("active");
//       searchForm.classList.add("active");
//     } else {
//       searchForm.classList.removed("active");
//       userInfoContainer.classList.remove("active");
//       getFromDessionStorage();
//     }
//   }
// }

// function getLocation(){
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition);
//   }
//   else{
//     console.log("no geolocation support");
//   }
// }

// function showPosition(position){
//   let lat = position.coords.latitude;
//   let longi = position.coords.longituede;

//   console.log(lat);
//   console.log(longi);

// }


// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-searchWeather]");

// const userContainer = document.querySelector(".weather-container");

// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");

// // initially variables need????
// let oldTab = userTab;

// const API_key = "d4dfa082ea5dc1c2932f5273becde520";
// oldTab.classList.add("current-tab");


// function switchTab(newTab){
//   if(newTab != oldTab){
//     oldTab.classList.remove("current-tab");
//     oldTab = newTab;
//     oldTab.classList.add("current-tab");

//     if(!searchForm.classList.contains("active")){
//       //kya search form wala container is invisible ,if yes then make it visible.
//       userInfoContainer.classList.remove("active");
//       grantAccessContainer.classList.remove("active");
//       searchForm.classList.add("active");
//     }
//     else{
//       searchForm.classList.remove("active");
//       userInfoContainer.classList.remove("active");
//       //ab main your weather tab me aagya hu, toh weather bhi display karna padega , so lets check local storage first
//       //for coordinates , if we saved them there.
//       getfromSessionStorage();

//   }
// }
// }




// userTab.addEventListener("click",()=>{
//   //pass clicked tab as input parameter
//   switchTab(userTab);
// });

// searchTab.addEventListener("click",()=>{
//   //pass clicked tab as input parameter
//   switchTab(searchTab);
// });

// //check if cordinates are already present in session storage
// function getfromSessionStorage(){
//   const localCoordinates = sessionStorage.getItem("user-coordinates");
//   if(!localCoordinates){
//     //agar local coordinates nahi mile
//     grantAccessContainer.classList.add()

//   }
//   else{
//     const coordinates = JSON.parse(localCoordinates);
//     fetchUserWeatherInfo(coordinates);
//   }
// }

// async function fetchUserWeatherInfo(coordinates){
//   const {lat,lon} = coordinates;
//   //make grantcontainer invisible
//   grantAccessContainer.classList.remove("active");
//   //make loader visible
//   loadingScreen.classList.add("active");

//   //API CALL
//   try{

//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
//     )
//     const data = await response.json();
    
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   }
//   catch(err){
//     loadingScreen.classList.remove("active");

//   }

// }

// function renderWeatherInfo(){
//   //firstly, we have to fetch the elements

//   const cityName = document.querySelector("[data-cityName]");
//   const countryIcon = document.querySelector("[data-countryIcon]");
//   const desc = document.querySelector("[data-weatherDesc]");
//   const weatherIcon = document.querySelector("[data-weatherIcon]");
//   const temp = document.querySelector("[data-temp]");
//   const windspeed = document.querySelector("[data-windspeed]");
//   const humidity = document.querySelector("[data-humidity]");
//   const cloudiness = document.querySelector("[data-cloudiness]");

//   //fetch values from weatherInfo object and put it UI elements
//   cityName.innerText = weatherInfo?.name;
//   countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//   desc.innerText = weatherInfo?.weather?.[0]?.description;
//   weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//   temp.innerText = weatherInfo?.main?.temp;
//   windspeed.innertext = weatherInfo?.wind?.speed;
//   humidity.innertext = weatherInfo?.main?.humidity;
//   cloudiness.innerText = weatherInfo?.clouds?.all;
// }

// function getLocation(){
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition);
//   }
//   else{
//     //HW - show an alert for no geolocation support available
//   }
// }

// function showPosition(position){
//   const userCoordinates = {
//     lat: position.coords.latitude,
//     lon: position.coords.longitude,
//   }

//   sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
//   fetchUserWeatherInfo(userCoordinates);

// }

// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener("cllick",getLocation);

// const searchInput = document.querySelector("[data-searchInput]");

// searchForm.addEventListener("submit",(e)=>{
//   e.preventDefault();
//    let cityName = searchInput.value;

//    if(cityName === "")
//     return;
//    else
//       fetchSearchWeatherInfo(cityName);

// })

// async function fetchSearchWeatherInfo(city){
//   loadingScreen.classList.add("active");
//   userInfoContainer.classList.remove("active");
//   grantAccessContainer.classList.remove("active");

//   try{
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
//     const data = await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   }
//   catch(err){
//     //hw
//   }
// }

// - - - - - - - - - - - -Tab Handling- - - - - - - - - - - -
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const userInfoContainer = document.querySelector(".user-info-container");
const grantAccessContainer = document.querySelector(
  ".grant-location-container"
);
const searchForm = document.querySelector("[data-searchForm ]");
const searchInp = document.querySelector("[data-searchInp]");
const apiErrorContainer = document.querySelector(".api-error-container");
let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

// Setting default tab
currentTab.classList.add("current-tab");

function switchTab(clickedTab) {
  apiErrorContainer.classList.remove("active");
  if (clickedTab !== currentTab) {
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");
    if (!searchForm.classList.contains("active")) {
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    } else {
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      getFromSessionStorage();
    }
    // console.log("Current Tab", currentTab);
  }
}

userTab.addEventListener("click", () => {
  switchTab(userTab);
});
searchTab.addEventListener("click", () => {
  switchTab(searchTab);
});

// - - - - - - - - - - - -User Weather Handling- - - - - - - - - - - -
const grantAccessBtn = document.querySelector("[data-grantAccess]");
const messageText = document.querySelector("[data-messageText]");
const loadingScreen = document.querySelector(".loading-container");
const apiErrorImg = document.querySelector("[data-notFoundImg]");
const apiErrorMessage = document.querySelector("[data-apiErrorText]");
const apiErrorBtn = document.querySelector("[data-apiErrorBtn]");

// Check if coordinates are already present in Session Storage
function getFromSessionStorage() {
  const localCoordinates = sessionStorage.getItem("user-coordinates");
  if (!localCoordinates) {
    grantAccessContainer.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
  }
}

// Get Coordinates using geoLocation
// https://www.w3schools.com/html/html5_geolocation.asp
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    grantAccessBtn.style.display = "none";
    messageText.innerText = "Geolocation is not supported by this browser.";
  }
}

// Store User Coordinates
function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
  sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
  fetchUserWeatherInfo(userCoordinates);
}

// Handle any errors
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      messageText.innerText = "You denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      messageText.innerText = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      messageText.innerText = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      messageText.innerText = "An unknown error occurred.";
      break;
  }
}

getFromSessionStorage();
grantAccessBtn.addEventListener("click", getLocation);

// fetch data from API - user weather info
async function fetchUserWeatherInfo(coordinates) {
  const { lat, lon } = coordinates;

  grantAccessContainer.classList.remove("active");
  loadingScreen.classList.add("active");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    // console.log("User - Api Fetch Data", data);
    if (!data.sys) {
      throw data;
    }
    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (error) {
    // console.log("User - Api Fetch Error", error.message);
    loadingScreen.classList.remove("active");
    apiErrorContainer.classList.add("active");
    apiErrorImg.style.display = "none";
    apiErrorMessage.innerText = `Error: ${error?.message}`;
    apiErrorBtn.addEventListener("click", fetchUserWeatherInfo);
  }
}

// Render weather Info In UI
function renderWeatherInfo(weatherInfo) {
  // console.log("Weather Info", weatherInfo);
  const cityName = document.querySelector("[data-cityName]");
  const countryIcon = document.querySelector("[data-countryIcon]");
  const desc = document.querySelector("[data-weatherDesc]");
  const weatherIcon = document.querySelector("[data-weatherIcon]");
  const temp = document.querySelector("[data-temp]");
  const windspeed = document.querySelector("[data-windspeed]");
  const humidity = document.querySelector("[data-humidity]");
  const cloudiness = document.querySelector("[data-cloudiness]");

  cityName.innerText = weatherInfo?.name;
  countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
  desc.innerText = weatherInfo?.weather?.[0]?.main;
  weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
  temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
  windspeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)}m/s`;
  humidity.innerText = `${weatherInfo?.main?.humidity}%`;
  cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

// - - - - - - - - - - - -Search Weather Handling- - - - - - - - - - - -

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchInp.value === "") return;
  // console.log(searchInp.value);
  fetchSearchWeatherInfo(searchInp.value);
  searchInp.value = "";
});

// fetch data from API - user weather info
async function fetchSearchWeatherInfo(city) {
  loadingScreen.classList.add("active");
  userInfoContainer.classList.remove("active");
  apiErrorContainer.classList.remove("active");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    // console.log("Search - Api Fetch Data", data);
    if (!data.sys) {
      throw data;
    }
    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (error) {
    // console.log("Search - Api Fetch Error", error.message);
    loadingScreen.classList.remove("active");
    apiErrorContainer.classList.add("active");
    apiErrorMessage.innerText = `${error?.message}`;
    apiErrorBtn.style.display = "none";
  }
}
