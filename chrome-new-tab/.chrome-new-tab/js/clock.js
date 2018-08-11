function updateClock(){
  var currentTime = new Date(),
    currentHours = currentTime.getHours(),
    currentMinutes = ('0'+currentTime.getMinutes()).slice(-2);
    currentHours = currentHours % 12;
    if (currentHours == "0") currentHours = 12;
    document.getElementById("clock").innerHTML = currentHours + ':' + currentMinutes;
}

updateClock();
var intervalID = window.setInterval(updateClock, 10000);
