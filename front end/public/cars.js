
function getCars(){
  var d = new Date();
  var date1final = parseInt(window.localStorage.getItem("pickedDate1Stored")); 
  var date2final = parseInt(window.localStorage.getItem("pickedDate2Stored")); 
  var month1final = parseInt(window.localStorage.getItem("pickedMonth1Stored")); 
  var month2final = parseInt(window.localStorage.getItem("pickedMonth2Stored")); 
  
  $.getJSON('https://localhost:5001/car/models?From='+ date1final + '.' +month1final+ '.' + d.getFullYear() + '&To=' + date2final + '.' + month2final + '.' + d.getFullYear(), function(data) {
  console.log(data);
  
  
  

  

});
}
window.onload=getCars;