const buttonNext = document.getElementById('next')
const buttonSave = document.getElementById('save')
var xhr = new XMLHttpRequest()
let token = window.localStorage.getItem("token")
let role = window.localStorage.getItem("role") 
let fnameUser = window.localStorage.getItem("fname") 
let lnameUser = window.localStorage.getItem("lname")
let phoneUser = window.localStorage.getItem("phone") 
let stateUser = window.localStorage.getItem("state") 
let cityUser = window.localStorage.getItem("city") 
let addressUser = window.localStorage.getItem("address") 
let postCodeUser = window.localStorage.getItem("postCode") 
let driversLicenseUser = window.localStorage.getItem("driversLicense") 
console.log(fnameUser,lnameUser,phoneUser,stateUser,cityUser,addressUser,postCodeUser,driversLicenseUser)


document.getElementById('fname').value = fnameUser;
document.getElementById('lname').value = lnameUser;
document.getElementById('phone').value = phoneUser;
document.getElementById('state').value = stateUser;
document.getElementById('city').value = cityUser;
document.getElementById('address').value = addressUser;
document.getElementById('post-code').value = postCodeUser;
document.getElementById('drivers-license').value = driversLicenseUser;

const saveData = () => {
    const fname = document.getElementById('fname').value.trim()
    const lname = document.getElementById('lname').value.trim()
    const phone = document.getElementById('phone').value.trim()
    const state = document.getElementById('state').value.trim()
    const city = document.getElementById('city').value.trim()
    const address = document.getElementById('address').value.trim()
    const postCode = document.getElementById('post-code').value.trim()
    const driversLicense = document.getElementById('drivers-license').value.trim()
    
    let username = window.localStorage.getItem("login")
    let token = window.localStorage.getItem("token")
   const userData = {
        "login": username,
        "userFname": fname,
        "userLname": lname,
        "phoneNumber": phone,
        "state": state,
        "city": city,
        "adress": address,
        "postCode": postCode,
        "driverLicenceNumber": driversLicense
    }
    console.log(userData);
    alert(username)
  
  
    const url = "https://localhost:44353/userrr/fillData";
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    console.log(JSON.stringify(userData))
    console.log(token);
    xhr.send(JSON.stringify(userData));
}


    





buttonSave.addEventListener('click', saveData)


