const btn = document.getElementById('create')
var xhr = new XMLHttpRequest()

  
const create = () =>{
const plate = document.getElementById('plate')
const price = document.getElementById('price')
const carType = document.getElementById('car-type')
const model = document.getElementById('model')
  
    const carData = {
      "brandOfCar": carType,
      "model": model,
      "plate" : plate,
      "login": null ,
      "password" : null ,
      "price" : price,
    }
  
  
    const url = 'https://localhost:44353/admin/addCar';
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    console.log(JSON.stringify(carData))
    xhr.send(JSON.stringify(carData));
    
  }


btn.addEventListener('click', create)


