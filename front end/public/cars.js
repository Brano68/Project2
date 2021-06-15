
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
      const fuelIconSvg = ''
      
      const passengersIconSvg = ''

      let gearImg;
      if(gear ==="auto")
      gearImg = "auto.png"
      else
      gearImg = "manual.png"

      $( ".carsDiv" ).append( '<div id="carBorder" class="bglogin rounded-xl"><div class="carDiv md:m-auto" id="' + (plate) + '"><div class="carDiv1"><div id="carName">' + brandOfCar + ' ' + model + '</div></div>' + 
      '<div class="carDiv2 justify-between"><img id="carPicture" src=' + path + '><button class="orderButton ml-10"><div class="orderButtonText font-sans"><span id="price"> ' + price + ' </span> € PER DAY</div><div class="orderButtonText font-sans">ORDER NOW</div></button></div>' + 
      '<div class="carDiv3"><div class="carIcons text-sm text-center"><img src="fuel.png"> ' + fuel + '</div><div class="carIcons text-sm text-center"><img src="Electronic_Devices__28141_29.png"> ' + numberOfPassenger + '</div><div id="gear" class="carIcons text-sm text-center"><img src="'+gearImg+'">' + gear + '</div><div class="carIcons text-sm text-center"><img src="air.png">' + airConditioner + '</div><div class="carIcons text-sm"></div></div></div></div>' );


      console.log(brandOfCar, model, plate);

      

    }

    
  
  
  

  

  });
}
window.onload=getCars;

function borrow(){

    const login = document.getElementById('user').value.trim()
    window.localStorage.setItem("login", user)
    const password = document.getElementById('password').value.trim()
    var plate = document.getElementById("admin");
    
    
    
    if (checkBox.checked === true) {
        userName = 'admin';
    } else {
        userName = 'userrr';
    }
    
    const userData = {
      "login": user,
      "password": password
    }
    
    
    const url = 'https://localhost:5001/userrr/login';
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    console.log(JSON.stringify(userData))
    xhr.send(JSON.stringify(userData));
    
    
}