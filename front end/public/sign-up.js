const button = document.getElementById('signup')
var xhr = new XMLHttpRequest()
var checkBox = document.getElementById("admin");
var adminField = document.getElementById("adminField");
const global = document.getElementById('global')
let role = window.localStorage.getItem("role")
let login = window.localStorage.getItem("login")

const adminCreate= () => {
  let role = window.localStorage.getItem("role")
  if (role == "admin"){
    document.getElementById('adminField').style.display = "flex";
  } else {
    document.getElementById('adminField').style.display = "none";
  }
}

function adminFunction() {
  if (checkBox.checked == true){
    adminField.style.display = "flex";
    global.style.padding = "4px"
  } else {
    adminField.style.display = "none";
    global.style.padding = "0px"
  }
}

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
 if (response.statusCode === 200)
      window.location.href = "login.html"
     
};

  
  const create = () =>{
    const user = document.getElementById('user').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()
  
    let adminInput = null;
    let userName = null;
    

    
    if (checkBox.checked === true) {
        userName = 'admin';
        adminInput = document.getElementById("adminField").value.trim()
    } else {
        userName = 'userrr';
    }
  
    const userData = {
      "loginWhoIsCreating": login,
      "login": user,
      "password": password,
      "email" : email,
      "globalPassword": adminInput,
    }
  
  
    const url = 'https://localhost:44353/userrr/create';
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    console.log(JSON.stringify(userData))
    xhr.send(JSON.stringify(userData));
    
  }


button.addEventListener('click', create)

