function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);



var time8am = $("#8AM");
var time9am = $("#9AM");
var time10am = $("#10AM");
var time11pm = $("#11PM");
var time12pm = $("#12PM");
var time1pm = $("#1PM");
var time2pm = $("#2PM");
var time3pm = $("#3PM");
var time4pm = $("#4PM");
var saveBtn = $(".save-icon");
var containerEl = $(".container");

var TimeElArray = [
    time8am,
    time9am,
    time10am,
    time11pm,
    time12pm,
    time1pm,
    time2pm,
    time3pm,
    time4pm,
];

document.querySelector('.container').onclick = function(event) {
    var a = event.target.innerHTML;
    console.log(a);
  }