const button = document.getElementById('signup')
var xhr = new XMLHttpRequest()
var checkBox = document.getElementById("admin");
var adminField = document.getElementById("adminField");


function adminFunction() {
  if (checkBox.checked == true){
    adminField.style.display = "flex";
  } else {
    adminField.style.display = "none";
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
      "login": user,
      "password": password,
      "email" : email,
      "globalPassword": adminInput,
    }
  
  
    const url = 'https://localhost:44353/' + userName + '/create';
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    console.log(JSON.stringify(userData))
    xhr.send(JSON.stringify(userData));
  
  }


button.addEventListener('click', create)

