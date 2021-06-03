const logout = document.getElementById ('logout')
var xhr = new XMLHttpRequest()
let login = window.localStorage.getItem("login")


const log_out = () => {
    let token = window.localStorage.getItem("token")
    const user = {
        "login": login
      }
xhr.open('post', 'https://localhost:44353/admin/logout' , true)
xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
xhr.setRequestHeader('Authorization', 'Bearer ' + token);
xhr.send(JSON.stringify(user));
logout.addEventListener('click', log_out)
window.location.replace("index.html");
alert("test");
}
