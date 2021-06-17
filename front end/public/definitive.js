var xhr2 = new XMLHttpRequest()


function definitiveOrder(){
    const token = window.localStorage.getItem("token");
    const login = window.localStorage.getItem("login");
    const from = window.localStorage.getItem("sendingDate1")
    const to = window.localStorage.getItem("sendingDate2")
    const carId = parseInt(window.localStorage.getItem("carId"));
    const userId = parseInt(window.localStorage.getItem("userId"));
    const pricePerDay = parseInt(window.localStorage.getItem("price"));
    const definiteData = {
      "Login": login,
      "CarID": carId,
      "UserID": userId,
      "From": from,
      "To": to,
      "PricePerDays": pricePerDay
    }
    const url = 'https://localhost:5001/userrr/definitely';
    xhr2.open('post', url, true)
    xhr2.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    xhr2.setRequestHeader('Authorization', 'Bearer ' + token);
    console.log(definiteData);
    xhr2.send(JSON.stringify(definiteData));
      
    xhr2.onload = () => {
        const response = xhr2.responseText;
        console.log(response);
        if(response.statusCode === 200){
            
            $( "#text" ).append( 'ORDER COMPLETED SUCCESSFULY' );
          
        }else{
            $( "#text" ).append( 'SOMETHING WENT WRONG, TRY AGAIN LATER' );
        }
        
    }
      
        
        
      
}
function getToHome(){
    window.location.href="index.html";
}


window.onload = definitiveOrder