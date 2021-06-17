var xhr = new XMLHttpRequest() 







const card = () =>{
    const login = window.localStorage.getItem("login")
    const cardNumber = document.getElementById('cardNumber').value
    const cardName = document.getElementById('nameOnCard').value
    const expirationDate = document.getElementById('expiry').value
    const cvc = parseInt(document.getElementById('cvv').value)
    const from = parseInt(window.localStorage.getItem("sendingDate1")).toString()
    const to = parseInt(window.localStorage.getItem("sendingDate2")).toString()
    const price = parseInt(window.localStorage.getItem("totalPrice"))
    const cardData = {
        "login": login,
        "from": from,
        "to": to,
        "cardNumber": cardNumber,
        "cardName": cardName,
        "expirationDate": expirationDate,
        "cvc": cvc,
        "price": price
          
    }
  
    const url = 'https://localhost:5001/userrr/pay';
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    console.log(JSON.stringify(cardData))
    xhr.send(JSON.stringify(cardData)); 
    event.preventDefault()
  }
  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    if(response.statusCode === 200){
      
      alert("The payment is successful.")
      window.location.href = "afterOrder.html"
      
    }
    
  }

  pay.addEventListener('click', card)

  

