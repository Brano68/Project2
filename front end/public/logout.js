function logout(){
    let loginFlag = 0;
    let loginStoredReset = null;
    window.localStorage.setItem("loginFlag", loginFlag);
    window.localStorage.setItem("loginStored",loginStoredReset);
    window.localStorage.setItem("passwordStored",loginStoredReset);
    window.localStorage.setItem("token", loginStoredReset);
    window.location.href="index.html";
}
