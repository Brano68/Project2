const logout = document.getElementById ('logout')
var xhr = new XMLHttpRequest()

const log_out = () => {
const user = //id 
xhr.open('post', 'https://localhost:44353/admin/logout' , true)
xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
console.log(JSON.stringify(user))
xhr.send(JSON.stringify(user));
logout.addEventListener('click', log_out)
}
