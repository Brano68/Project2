
function showSummary(){
    
    var date1 = window.localStorage.getItem("sendingDate1");
    var date2 = window.localStorage.getItem("sendingDate2");
    var carName = window.localStorage.getItem("carName");
    var priceForDay = window.localStorage.getItem("price");

    
    

    
    
    function countTotalPrice(){
        var day1 = parseInt(date1.split(".")[0]);
        var day2 = parseInt(date2.split(".")[0]);
        var month1 = parseInt(date1.split(".")[1]);
        var month2 = parseInt(date2.split(".")[1]);
        var year1 = parseInt(date1.split(".")[2]);
        var year2 = parseInt(date2.split(".")[2]);
        var totalDays = 0;
        var i = year1;
        var j = month1;
        
        
        for(i; i <= year2 ; i++){
            for(j; j <= month2; j++){
                if(j === month2){
                    totalDays = totalDays + day2;
                    break;
                }
                if(j === 1){
                    totalDays = totalDays + 31;
                }else if(j === 2){
                    totalDays = totalDays + 28;
                }else if(j === 3){
                    totalDays = totalDays + 31;
                }else if(j === 4){
                    totalDays = totalDays + 30;
                }else if(j === 5){
                    totalDays = totalDays + 31;
                }else if(j === 6){
                    totalDays = totalDays + 30;
                }else if(j === 7){
                    totalDays = totalDays + 31;
                }else if(j === 8){
                    totalDays = totalDays + 31;
                }else if(j === 9){
                    totalDays = totalDays + 30;
                }else if(j === 10){
                    totalDays = totalDays + 31;
                }else if(j === 11){
                    totalDays = totalDays + 30;
                }else if(j === 12){
                    totalDays = totalDays + 31;
                }
                
            }
        }
        totalDays = totalDays - day1;
        let totalPrice = (totalDays * priceForDay);
        window.localStorage.setItem("totalPrice", totalPrice);
    }

    countTotalPrice();
    let totalPrice = window.localStorage.getItem("totalPrice");
    


    let when = document.getElementById("when");
    let car = document.getElementById("car");
    let definitePrice = document.getElementById("price");
    when.innerHTML = when.innerHTML + " " + date1 + " - " + date2
    car.innerHTML = car.innerHTML + " " + carName
    definitePrice.innerHTML = price.innerHTML + " " + totalPrice + " €";
    
}

function getToThePayment(){
    window.location.href="account-card.html";
}


window.onload=showSummary();
