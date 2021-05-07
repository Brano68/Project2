const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    
const d = new Date();

document.getElementById("day").innerHTML = d.getDay();
document.getElementById("month").innerHTML = monthNames[d.getMonth()];
document.getElementById("year").innerHTML = d.getFullYear();

document.getElementById("dayDate").onclick.style.backgroundColor = "blue";



