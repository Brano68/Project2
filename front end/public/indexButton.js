function rentButton(){
    let loginFlag = window.localStorage.getItem("loginFlag");
    if(loginFlag ==="1"){
        function loadOrders(){
            window.location.href="account-orders.html"
        }
        document.getElementById("rentButton").addEventListener("click", loadOrders)
    }else{
        function loadOrders(){
            window.location.href="login.html"
        }
        document.getElementById("rentButton").addEventListener("click", loadOrders)
    }
}
window.onload = rentButton();
