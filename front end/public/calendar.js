




// function generateCalendar(){
//     for(var i = 1;i < 32;i++){
//         $( "#dayDateDiv" ).append( '<div class="daysDiv" id="dayDate' + i + '"><p class="calDays">' + i + '</p></div>' );
//     }
// }
var monthChange = 0;

function monthDecrease(){
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    
    if(monthChangeStored==null){
        window.localStorage.setItem("monthChangeStored", monthChange);
    }
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    if(monthChangeStored>=-1){
        monthChangeStored--;
        window.localStorage.setItem("monthChangeStored", monthChangeStored);
    }
    
    location.reload();
};

function monthIncrease(){
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    
    if(monthChangeStored==null){
        window.localStorage.setItem("monthChangeStored", monthChange);
    }
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    if(monthChangeStored<=1){
        monthChangeStored++;
        window.localStorage.setItem("monthChangeStored", monthChangeStored);
    }
    location.reload();
};

function getCurrentDate(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    
    
    var d = new Date();
    var day = d.getDate();
    var month = Number(d.getMonth()) + Number(monthChangeStored);
    console.log(month);
    var year = d.getFullYear();

    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = monthNames[month];
    document.getElementById("year").innerHTML = year;
};

window.onload = getCurrentDate;
//window.onload = generateCalendar;