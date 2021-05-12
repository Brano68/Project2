var monthChange = 0;

var leftArrow = document.getElementById("leftArrow").onclick = function monthDecrease(){
    monthChange-- ;
    return monthChange;
    location.reload;
}

var rightArrow = document.getElementById("rightArrow").onclick = function monthIncrease(){
    monthChange++ ;
    return monthChange;
    location.reload;
}





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
}

window.onload = leftArrow;
window.onload = rightArrow;
window.onload = getCurrentDate;