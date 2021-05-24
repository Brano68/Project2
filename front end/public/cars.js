
function getCars(){

  var result = $.ajax({
    type: "POST",
    url: "https://localhost:5001/car/models?From=25.05.2021&To=30.05.2021",
    param: '{}',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (data) {
        
  }
}) .responseText ;
return  result;

console.log(result);


}

onload.getCars();