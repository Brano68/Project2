const loginButton = document.getElementById('login')
var xhr = new XMLHttpRequest()
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const rmCheck = document.getElementById("rememberMe"),
  userInput = document.getElementById("user");
  

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  userInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  userInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && userInput.value !== "") {
    localStorage.username = userInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.userInput = "";
    localStorage.checkbox = "";
  }
}

  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    const token = response.token;
    const role = response.role;
    const fname = response.userFname;
    const lname = response.userLname;
    const phone = response.phoneNumber;
    const country = response.state;
    const city = response.city;
    const address = response.adress;
    const postCode = response.postCode;
    const driverLicense = response.driverLicenceNumber;

    window.localStorage.setItem("token", token)
    window.localStorage.setItem("role", role) 
    window.localStorage.setItem("fname", fname) 
    window.localStorage.setItem("lname", lname)
    window.localStorage.setItem("phone", phone) 
    window.localStorage.setItem("country", country) 
    window.localStorage.setItem("city", city) 
    window.localStorage.setItem("address", address) 
    window.localStorage.setItem("postCode", postCode) 
    window.localStorage.setItem("driverLicense", driverLicense) 
    if (response.message.statusCode == 200) {
      let loginFlag = 1;
      window.localStorage.setItem("loginFlag", loginFlag);
      const loginStored = document.getElementById('user').value.trim();
      const passwordStored = document.getElementById('password').value.trim();
      window.localStorage.setItem("loginStored",loginStored);
      window.localStorage.setItem("passwordStored",passwordStored);
      window.location.href = "account.html"
      if(role == "admin"){
        loginFlag = 2;
        window.localStorage.setItem("loginFlag", loginFlag);
      }
    }else if(response.statusCode == 200){
      let loginFlag = 1;
      window.localStorage.setItem("loginFlag", loginFlag);
      const loginStored = document.getElementById('user').value.trim();
      const passwordStored = document.getElementById('password').value.trim();
      window.localStorage.setItem("loginStored",loginStored);
      window.localStorage.setItem("passwordStored",passwordStored);
      window.location.href = "account.html"
      if(role == "admin"){
        loginFlag = 2;
        window.localStorage.setItem("loginFlag", loginFlag);
      }
    }
    
    };


const login = () =>{
const user = document.getElementById('user').value.trim()
window.localStorage.setItem("login", user)
const password = document.getElementById('password').value.trim()
var checkBox = document.getElementById("admin");

let userName = null;

if (checkBox.checked === true) {
    userName = 'admin';
} else {
    userName = 'userrr';
}

const userData = {
  "login": user,
  "password": password
}


<<<<<<< HEAD
const url = 'https://localhost:5001/' + userName + '/login';
=======
const url = 'https://localhost:44353/'+ userName +'/login';
>>>>>>> fefaf2769ccdf139c5e0de77615c62d11cb02f08
xhr.open('post', url, true)
xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
console.log(JSON.stringify(userData))
xhr.send(JSON.stringify(userData));

}




loginButton.addEventListener('click', login)