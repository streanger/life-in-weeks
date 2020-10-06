var today = new Date();


function init(){
    var dateInput = document.getElementById("dateInput");
    var value = "2000-01-01";
    var minLimit = "1930-10-05";
    var maxLimit = today.toISOString().substring(0, 10);
    // console.log(upLimit);
    
    dateInput.min = minLimit;
    dateInput.max = maxLimit;
    dateInput.value = value;
    myFunction();
}


function myFunction(){
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
    // console.log('clicked');
    
    var dateInput = document.getElementById("dateInput");
    var startDate = new Date(dateInput.value);
    var totalWeeks = getAge(startDate, today);    // in full weeks
    
    var totalWeeksItem = document.getElementById("totalWeeks");
    totalWeeksItem.textContent = "Total weeks: " + totalWeeks;
    
    var totalWeeksUseful = clamp(totalWeeks, 0, 90*52);
    console.log("totalWeeksUseful: " + totalWeeksUseful);
    
    
    // paint with number of totalWeeksUseful
    
}


function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}


function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    // return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));    // years
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 7));    // weeks
}


function drawImage(){
    // pass
    
}


/*
info, todo:
    -make validation for days vs months

*/

