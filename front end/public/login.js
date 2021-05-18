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
const login = () =>{
const user = document.getElementById('user').value.trim()
const password = document.getElementById('password').value.trim()
const userData = {
  "login": user,
  "password": password,
}
    xhr.open('post', 'https://localhost:44353/userrr/login', true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    console.log(JSON.stringify(userData))
    xhr.send(JSON.stringify(userData));
}

loginButton.addEventListener('click', login)