function updateTime(){
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if(losAngelesElement){
let losAngelesDateElement= losAngelesElement.querySelector(".date");
let losAngelesTimeElement= losAngelesElement.querySelector(".time");

let losAngelesTime=moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML=losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML=losAngelesTime.format("hh:mm:ss [<small>]A[</small]");
}
//Sydney 
let sydneyElement = document.querySelector("#sydney");
if (sydneyElement){
let sydneyDateElement= sydneyElement.querySelector(".date");
let sydneyTimeElement= sydneyElement.querySelector(".time");

let sydneyTime=moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML=sydneyTime.format("hh:mm:ss [<small>]A[</small]");
}
let newYorkElement = document.querySelector("#new-york");
if (newYorkElement){
let newYorkDateElement= newYorkElement.querySelector(".date");
let newYorkTimeElement= newYorkElement.querySelector(".time");

let newYorkTime=moment().tz("America/New_York");

newYorkDateElement.innerHTML=newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML=newYorkTime.format("hh:mm:ss [<small>]A[</small]");
}
}

updateTime();
setInterval(updateTime, 1000);

//Dropdown
function updateCity(event){
    let timeZone=event.target.value;
    if (timeZone === "current"){
        timeZone = moment.tz.guess();
    }
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityTime= moment().tz(timeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML=`
    <div>
        <div class="city">
          <div class="city-date">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/"> All cities</a>
        `;

}

let citiesSelect= document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);


