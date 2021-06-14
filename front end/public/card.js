
var xhr = new XMLHttpRequest()
const login = window.localStorage.getItem("login")
const token = window.localStorage.getItem("token")
const cardNumberUser = window.localStorage.getItem("cardNumber")
const cardNameUser = window.localStorage.getItem("cardName")
const expirationDateUser = window.localStorage.getItem("expirationDate")
const cvcUser = window.localStorage.getItem("cvc")
const pay = document.getElementById('pay')

document.getElementById('card-number').value = cardNumberUser
document.getElementById('name-on-card').value = cardNameUser
document.getElementById('valid').value = expirationDateUser
document.getElementById('cvv').value = cvcUser
if (cardNameUser === "undefined")
cardNameUser = ""
if (cardNumberUser === "undefined")
cardNumberUser = ""
if (expirationDateUser === "undefined")
expirationDateUser = ""
if (cvcUser === "undefined")
cvcUser = ""

const card = () =>{
    const cardNumber = document.getElementById('card-number').value.trim()
    const cardName = document.getElementById('name-on-card').value.trim()
    const expirationDate = document.getElementById('valid').value.trim()
    const cvc = document.getElementById('cvv').value.trim()
    const from = parseInt(window.localStorage.getItem("pickedDate1Stored"))
    const to = parseInt(window.localStorage.getItem("pickedDate2Stored"))
    const price = parseInt(window.localStorage.getItem("price"))
    window.localStorage.setItem("cardNumber", cardNumber)
    window.localStorage.setItem("cardName", cardName)
    window.localStorage.setItem("expirationDate", expirationDate)
    window.localStorage.setItem("cvc", cvc)
    
    const cardData = {
        "login": login,
        "from": from,
        "to": to,
        "cardNumber": cardNumber,
        "cardName": cardName,
        "expirationDate": expirationDate,
        "cvc": cvc,
        "price": price,
    }
  
  
    const url = 'https://localhost:44353/userrr/pay';
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    console.log(JSON.stringify(cardData))
    xhr.send(JSON.stringify(cardData));
    
  }
  pay.addEventListener('click', card)


