
function getCars(){
  var d = new Date();
  var date1final = parseInt(window.localStorage.getItem("pickedDate1Stored")); 
  var date2final = parseInt(window.localStorage.getItem("pickedDate2Stored")); 
  var month1final = parseInt(window.localStorage.getItem("pickedMonth1Stored")); 
  var month2final = parseInt(window.localStorage.getItem("pickedMonth2Stored")); 
  
  $.getJSON('https://localhost:5001/car/models?From='+ date1final + '.' +month1final+ '.' + d.getFullYear() + '&To=' + date2final + '.' + month2final + '.' + d.getFullYear(), function(data) {
    
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



      console.log(brandOfCar, model, plate);

      $( ".carsDiv" ).append( '<div class="carDiv md:m-auto md:my-2" id="' + (plate) + '"><div class="carDiv1"><div id="carName">' + brandOfCar + ' ' + model + '</div></div>' + 
      '<div class="carDiv2 justify-between"><img id="carPicture" src=' + path + '><button class="orderButton"><div class="orderButtonText font-sans"><span id="price"> ' + price + ' </span> € PER DAY</div><div class="orderButtonText font-sans">ORDER NOW</div></button></div>' + 
      '<div class="carDiv3"><div class="carIcons">' + fuel + '</div><div class="carIcons">' + numberOfPassenger + '</div><div class="carIcons">' + airConditioner + '</div><div class="carIcons"></div></div></div>' );


    }

    
  
  
  

  

  });
}
window.onload=getCars;

function borrow(){
  
}