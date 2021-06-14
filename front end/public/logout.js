function logout(){
    let loginFlag = 0;
    window.localStorage.setItem("loginFlag", loginFlag);
    window.location.href="index.html";
}
