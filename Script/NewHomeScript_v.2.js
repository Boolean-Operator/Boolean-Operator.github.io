$(document).ready(function () {
  const clockDiv = document.getElementById('clock');
  const footerText = document.getElementById('footerText');
  
  let year = new Date().getFullYear();
  console.log(year);

  footerText.textContent = `Mark T. Graybill © ${year}`;
  
  function printTime() {
      let now = new Date();
      
      let month = now.getMonth();
      let day = now.getDay();

      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
  //set AM or PM and convert to 12-hour clock
      var meridian = "AM";
      if (hours>12) {
        meridian= "PM";
        hours = (hours-12);
      }
      if (hours == 0){
        hours = 12;
      }
      if (minutes<=9){ 
        minutes="0"+ minutes;
      }
      if (seconds<=9){ 
        seconds= "0"+ seconds;
      }
            
      clockDiv.textContent = hours+":"+minutes+"  " + meridian;
    };

    setInterval(printTime,1000);

  const backImages = [
    "Autumn Leaves",
    "Blossom",
    "Butterfly",
    "Cabo",
    "California Poppy",
    "Chrysanthemum",
    "cloudy-evening",
    "Crater",
    "Creek",
    "Desert Landscape",
    "Desert",
    "Dock",
    "El Capitan",
    "El Matador",
    "evening-sky",
    "Forest",
    "Garden",
    "Half Dome at Sunset",
    "Humpback Whale",
    "lightning",
    "Oryx Antelope",
    "rain-blur",
    "rain-umbrella",
    "rainy-window",
    "sleet",
    "sunny-lake",
    "TajMahal",
    "Tree",
    "TwoJackLake",
    "Yosemite Valley"
  ];

  function getRandomBG() {
    var num = Math.floor(Math.random() * backImages.length);
    var arrVal = backImages[num];
    console.log(arrVal);
    var imgVal = "url('assets/" + arrVal + ".jpg')";
    $('body').css("background-image", imgVal);
  }
  getRandomBG();
});

function darkSkyOpen() {
  window.open("https://darksky.net/forecast/39.1254,-75.5263/us12/en")
}