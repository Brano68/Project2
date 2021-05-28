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

  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    const token = response.token;
    const role = response.role;
    const login = document.getElementById('user').value.trim()
    window.localStorage.setItem("token", token)
    window.localStorage.setItem("role", role) 
    window.localStorage.setItem("login", login) 
    window.location.href = "account.html"
    alert(login)
   
    
};


const login = () =>{
const user = document.getElementById('user').value.trim()
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


const url = 'https://localhost:44353/' + userName + '/login';
xhr.open('post', url, true)
xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
console.log(JSON.stringify(userData))
xhr.send(JSON.stringify(userData));

}



loginButton.addEventListener('click', login)