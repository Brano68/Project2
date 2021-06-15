function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
    links.style.backgroundImage = 'linear-gradient(222.88deg, #76FF61 11.47%, #29ABE2 90.76%)';
    links.style.width = '100vh'
    links.style.height = '100vh'
    links.style.justifyContent = "center";
  }

function loginHide(){
  let loginFlag = window.localStorage.getItem("loginFlag");
  if(loginFlag ==="1"){
    document.getElementById("signupButtonToHide").style.display = "none";
    document.getElementById("loginButtonToHide").style.display = "none";
    document.getElementById("signupButtonToHide2").style.display = "none";
    document.getElementById("loginButtonToHide2").style.display = "none";
    function loadOrders(){
      window.location.href="account-orders.html"
    }
    document.getElementById("rentButton").addEventListener("click", loadOrders)
  }
  else{
    document.getElementById("accountButtonToHide").style.display = "none";
    document.getElementById("accountButtonToHide2").style.display = "none";
    function loadOrders(){
      window.location.href="login.html"
    }
    document.getElementById("rentButton").addEventListener("click", loadOrders)
  }
}

window.onload = loginHide();