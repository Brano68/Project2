var monthChange = 0;

function generateCalendar(){
    for(var i = 1;i < 32;i++){
        $( "#dayDateDiv" ).append( '<div class="daysDiv" id="dayDate' + i + '"><p class="calDays">' + i + '</p></div>' );
    }
}


document.getElementById("leftArrow").addEventListener("click", function monthDecrease(){
    monthChange-- ;
    return monthChange;
    location.reload;
});

document.getElementById("rightArrow").onclick = function monthIncrease(){
    monthChange++ ;
    return monthChange;
    location.reload;
};

function getCurrentDate(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + monthChange;
    var year = d.getFullYear();

    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = monthNames[month];
    document.getElementById("year").innerHTML = year;
};

window.onload = getCurrentDate;
window.onload = generateCalendar;