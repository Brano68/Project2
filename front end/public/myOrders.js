var xhr = new XMLHttpRequest()
let login = window.localStorage.getItem("login")
let token = window.localStorage.getItem("token")

const url = 'https://localhost:44353/userrr/reservation';
    xhr.open('GET', url, true)
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);