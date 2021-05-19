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
    if (document.cookie = 'token=' + token)
    window.location.href = "account-orders.html"
    
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