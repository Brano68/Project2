function logout(){
    var xhr = new XMLHttpRequest()
    const login = () =>{
        const login = window.localStorage.getItem("login");

        const userData = {
            "login": login
        }

        const url = 'https://localhost:5001/userrr/logout';
        xhr.open('post', url, true)
        xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8")
        console.log(JSON.stringify(userData))
        xhr.send(JSON.stringify(userData));
    }
    login();
    
    let loginFlag = 0;
    let loginStoredReset = null;
    window.localStorage.setItem("loginFlag", loginFlag);
    window.localStorage.setItem("loginStored",loginStoredReset);
    window.localStorage.setItem("passwordStored",loginStoredReset);
    window.localStorage.setItem("token", loginStoredReset);
    window.location.href="index.html";
}
