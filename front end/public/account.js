const buttonSave = document.getElementById('save')
var xhr = new XMLHttpRequest()


let fnameUser = window.localStorage.getItem("fname");
let lnameUser = window.localStorage.getItem("lname")
let phoneUser = window.localStorage.getItem("phone") 
let countryUser = window.localStorage.getItem("country") 
let cityUser = window.localStorage.getItem("city") 
let addressUser = window.localStorage.getItem("address") 
let postCodeUser = window.localStorage.getItem("postCode") 
let driverLicenseUser = window.localStorage.getItem("driverLicense") 

if (fnameUser === "undefined")
fnameUser = ""
if (lnameUser === "undefined")
lnameUser = ""
if (phoneUser === "undefined")
phoneUser = ""
if (countryUser === "undefined")
countryUser = ""
if (cityUser === "undefined")
cityUser = ""
if (addressUser === "undefined")
addressUser = ""
if (postCodeUser === "undefined")
postCodeUser = ""
if (driverLicenseUser === "undefined")
driverLicenseUser = ""

function showData(){
    document.getElementById('fname').value = fnameUser;
    document.getElementById('lname').value = lnameUser;
    document.getElementById('phone').value = phoneUser;
    document.getElementById('country').value = countryUser;
    document.getElementById('city').value = cityUser;
    document.getElementById('address').value = addressUser;
    document.getElementById('post-code').value = postCodeUser;
    document.getElementById('drivers-license').value = driverLicenseUser;

}



const saveData = () => {
    const fname = document.getElementById('fname').value.trim()
    const lname = document.getElementById('lname').value.trim()
    const phone = document.getElementById('phone').value.trim()
    const country= document.getElementById('country').value.trim()
    const city = document.getElementById('city').value.trim()
    const address = document.getElementById('address').value.trim()
    const postCode = document.getElementById('post-code').value.trim()
    const driverLicense = document.getElementById('drivers-license').value.trim()
    const username = window.localStorage.getItem("login");
    const token = window.localStorage.getItem("token")


    const userData = {
    "login": username,
    "userFname": fname,
    "userLname": lname,
    "phoneNumber": phone,
    "state": country,
    "city": city,
    "adress": address,
    "postCode": postCode,
    "driverLicenceNumber": driverLicense 
    }
    console.log(userData);
    const url = "https://localhost:44353/userrr/fillData";
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    console.log(JSON.stringify(userData))
    xhr.send(JSON.stringify(userData));
}



let fnameLname = document.getElementById('fnameLname')
let fnameLnamePhone = document.getElementById("fnameLnamePhone")
let email = window.localStorage.getItem("email")
let emailUser = document.getElementById("emailUser")
if(fnameUser === null && lnameUser === null){
   fnameLname = "Your name" 
}else{
fnameLname.innerHTML  = fnameUser + " " + lnameUser;
fnameLnamePhone.innerHTML = fnameUser + " " + lnameUser;  
}

emailUser.innerHTML = email;
buttonSave.addEventListener('click', saveData)
function visitPage(){
   window.location.href = "account-orders.html"
}
