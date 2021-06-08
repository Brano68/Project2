const btn = document.getElementById('create')
var xhr = new XMLHttpRequest()



  
const create = () =>{
let login = window.localStorage.getItem("login")
let token = window.localStorage.getItem("token")
const plate = document.getElementById('plate').value.trim()
const priceParse = document.getElementById('price').value.trim()
const price = parseFloat(priceParse)
const carType = document.getElementById('car-type').value.trim()
const model = document.getElementById('model').value.trim()
const fuel = document.getElementById('fuel')
const fuelValue = fuel.value;
const consumptionParse = document.getElementById('l').value.trim()
const consumption = parseFloat(consumptionParse)
const passengers = document.getElementById('passengers')
const numberOfPassengerParse = passengers.value
const numberOfPassenger = parseInt(numberOfPassengerParse)
const transmission = document.getElementById('transmission')
const gear = transmission.value
const air = document.getElementById('air')
let airConditioner = air.value

if (airConditioner ==='yes'){
  airConditioner = true
} else {
  airConditioner = false
}
   
  const carData = {
      "brandOfCar": carType,
      "model": model,
      "plate": plate,
      "login": login,
      "price": price,
      "fuel": fuelValue,
      "consumption": consumption,
      "numberOfPassenger": numberOfPassenger,
      "gear": gear,
      "airConditioner": airConditioner,
    }
  
  
    const url = 'https://localhost:44353/admin/addCar';
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    console.log(JSON.stringify(carData))
    xhr.send(JSON.stringify(carData));
    
  }


btn.addEventListener('click', create)

