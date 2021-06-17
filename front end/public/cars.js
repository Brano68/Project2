
function getCars(){
  var d = new Date();
  var date1final = parseInt(window.localStorage.getItem("pickedDate1Stored")); 
  var date2final = parseInt(window.localStorage.getItem("pickedDate2Stored")); 
  var month1final = parseInt(window.localStorage.getItem("pickedMonth1Stored")); 
  var month2final = parseInt(window.localStorage.getItem("pickedMonth2Stored")); 
  
  $.getJSON('https://localhost:44353/car/models?From='+ date1final + '.' +month1final+ '.' + d.getFullYear() + '&To=' + date2final + '.' + month2final + '.' + d.getFullYear(), function(data) {
    
    const cars = data["yourCars"];
    console.log(cars[1])
  
    for(var index in cars){
      const brandOfCar = cars[index].brandOfCar;
      const model = cars[index].model;
      const plate = cars[index].plate;
      const price = cars[index].price;
      const numberOfPassenger = cars[index].numberOfPassenger;
      const airConditioner = cars[index].airConditioner;
      const consumption = cars[index].consumption;
      const fuel = cars[index].fuel;
      const gear = cars[index].gear;
      const path = cars[index].path;
      
      
      let gearImg;
      if(gear ==="Automat")
      gearImg = "auto.png"
      else
      gearImg = "manual.png"
      const airCon = airConditioner.toString()
      let air;
      if(airCon==="true")
      air = "Yes"
      else
      air = "No"

      $( ".carsDiv" ).append( '<div id="carBorder" class="bglogin rounded-xl"><div class="carDiv md:m-auto"><div class="carDiv1"><div id="carName">' + brandOfCar + ' ' + model + '</div></div>' + 
      '<div class="carDiv2 justify-between"><img id="carPicture" src=' + path + '><button class="orderButton ml-8"  id="' + (plate) + '" onClick="borrow(this.id)" "><div class="orderButtonText font-sans"><span id="price">' + price + '</span> € PER DAY</div><div class="orderButtonText font-sans">ORDER NOW</div></button></div>' + 
      '<div class="carDiv3"><div class="carIcons text-sm text-center"><img src="fuel.png"> ' + fuel + '</div><div class="carIcons text-sm text-center"><img src="Electronic_Devices__28141_29.png"> ' + numberOfPassenger + '</div><div id="gear" class="carIcons text-sm text-center"><img src="'+gearImg+'">' + gear + '</div><div class="carIcons text-sm text-center"><img src="air.png">' + air + '</div><div class="carIcons text-sm"></div></div></div></div>' );

      

      console.log(brandOfCar, model, plate);
      var d = new Date();
      var sendingDate1 = date1final + "." + month1final + "."+ d.getFullYear();
      var sendingDate2 = date2final + "." + month2final + "."+ d.getFullYear();
      window.localStorage.setItem("sendingDate1",sendingDate1);
      window.localStorage.setItem("sendingDate2",sendingDate2);
      

    }

    
  
  
  

  

  });

  //reset of a calendar after moving to the next page
  let reset = null;
  let resetMonth = 0;
  window.localStorage.setItem("pickedDate1Stored", reset);
  window.localStorage.setItem("pickedMonth1stored", reset);
  window.localStorage.setItem("pickedDate2Stored", reset);
  window.localStorage.setItem("pickedMonth2stored", reset);
  window.localStorage.setItem("monthChangeStored", resetMonth);
  window.localStorage.setItem("flagStored", reset);

}

window.onload=getCars;

function borrow(clicked_id){
    
    var xhr = new XMLHttpRequest()

    
    let plate = clicked_id;
    let date1 = window.localStorage.getItem("sendingDate1");
    let date2 = window.localStorage.getItem("sendingDate2");

    let parent = document.getElementById(clicked_id);
    let priceText = parent.firstChild.textContent;
    let price = priceText.split(" ")[0];
    window.localStorage.setItem("price", price);
    let cardiv2 = parent.parentElement;
    let carName = cardiv2.previousSibling.textContent;
    window.localStorage.setItem("carName", carName);

    console.log(price);

    let login = window.localStorage.getItem("loginStored");
    let password = window.localStorage.getItem("passwordStored");
    const token = window.localStorage.getItem("token");


    const borrowData = {
      "login": login,
      "password": password,
      "plate": plate,
      "from": date1,
      "to": date2
    }

 
    const url = 'https://localhost:5001/userrr/borrow';
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);

    console.log(JSON.stringify(borrowData))
    console.log(price);
    xhr.send(JSON.stringify(borrowData));


    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
      const carId = response.carId;
      const userId = response.userId;
      if(response.statusCode === 200){
        window.localStorage.setItem("carId",carId)
        window.localStorage.setItem("userId",userId)
        window.location.href="summary.html"
      }else if(response.statusCode === 401){
        alert("Connection timed out, your token is invalid.")
      }
      
    }

    
    
    
}