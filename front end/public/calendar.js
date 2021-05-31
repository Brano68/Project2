var monthChange = 0;


function monthDecrease(){
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    
    if(monthChangeStored==null){
        window.localStorage.setItem("monthChangeStored", monthChange);
    }
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    if(monthChangeStored>=-1){
        monthChangeStored--;
        window.localStorage.setItem("monthChangeStored", monthChangeStored);
    }
    
    location.reload();
};

function monthIncrease(){
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    
    if(monthChangeStored==null){
        window.localStorage.setItem("monthChangeStored", monthChange);
    }
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    if(monthChangeStored<=1){
        monthChangeStored++;
        window.localStorage.setItem("monthChangeStored", monthChangeStored);
    }
    location.reload();
};



function getCurrentDate(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    
    
    var d = new Date();
    var day = d.getDate();
    var month = Number(d.getMonth()) + Number(monthChangeStored);
    //console.log(month);
    var year = d.getFullYear();

    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = monthNames[month];
    document.getElementById("year").innerHTML = year;

    if(month==0){
        var numberOfDays = 31;
    }else if(month==1){
        var numberOfDays = 28;
    }else if(month==2){
        var numberOfDays = 31;
    }else if(month==3){
        var numberOfDays = 30;
    }else if(month==4){
        var numberOfDays = 31;
    }else if(month==5){
        var numberOfDays = 30;
    }else if(month==6){
        var numberOfDays = 31;
    }else if(month==7){
        var numberOfDays = 31;
    }else if(month==8){
        var numberOfDays = 30;
    }else if(month==9){
        var numberOfDays = 31;
    }else if(month==10){
        var numberOfDays = 30;
    }else if(month==11){
        var numberOfDays = 31;
    }

    for(var i = 1;i < numberOfDays+1;i++){
        if(month == d.getMonth() && i == d.getDate()){
            $( "#dayDateDiv" ).append( '<div class="daysDivHighlighted" id="dayDate' + (i) + '"onClick="getOrderDate(this.id)"><p class="calDays">' + i + '</p></div>' );
        }else{
            $( "#dayDateDiv" ).append( '<div class="daysDiv" id="dayDate' + (i) + '"onClick="getOrderDate(this.id)"><p class="calDays">' + i + '</p></div>' );
        }
        
    }

    var date1final = window.localStorage.getItem("pickedDate1Stored")
    var date2final = window.localStorage.getItem("pickedDate2Stored")
    var month1final = window.localStorage.getItem("pickedMonth1Stored")
    var month2final = window.localStorage.getItem("pickedMonth2Stored")

    console.log(date1final);
    console.log(month1final);
    console.log(date2final);
    console.log(month2final);

    

};



function getOrderDate(clicked_id){
    var d = new Date();
    var flag = window.localStorage.getItem("flagStored");
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    var pickedDate = document.getElementById(clicked_id).firstChild.innerHTML
    
    var pickedMonth = Number(d.getMonth()) + Number(monthChangeStored) + 1;
    
    if(flag == null){
        
        window.localStorage.setItem("pickedDate1Stored", pickedDate)
        window.localStorage.setItem("pickedMonth1Stored",pickedMonth)
        
        flag = 1;
        window.localStorage.setItem("flagStored", flag);

        location.reload();
    }else if(flag==1){
        var pickedDate1Stored = window.localStorage.getItem("pickedDate1Stored")
        var pickedMonth1Stored = window.localStorage.getItem("pickedMonth1Stored")
        if(pickedDate == pickedDate1Stored && pickedMonth == pickedMonth1Stored){
            pickedDate1Stored = null
            pickedMonth1Stored = null
            
            window.localStorage.setItem("pickedDate1Stored", pickedDate1Stored)
            window.localStorage.setItem("pickedMonth1Stored", pickedMonth1Stored)
            flag = null;
            window.localStorage.setItem("flagStored", flag)
            location.reload();
        }else{
            
            window.localStorage.setItem("pickedDate2Stored",pickedDate)
            window.localStorage.setItem("pickedMonth2Stored", pickedMonth)
            flag = 2;
            window.localStorage.setItem("flagStored", flag)
            location.reload();
        }
    }else if(flag == 2){
        var pickedDate2Stored = window.localStorage.getItem("pickedDate2Stored")
        var pickedMonth2Stored = window.localStorage.getItem("pickedMonth2Stored")
        if(pickedDate == pickedDate2Stored && pickedMonth == pickedMonth2Stored){
            var pickedDate2Stored = null
            var pickedMonth2Stored = null
            window.localStorage.setItem("pickedDate2Stored",pickedDate2Stored)
            window.localStorage.setItem("pickedMonth2Stored", pickedMonth2Stored)
            flag = 1
            window.localStorage.setItem("flagStored", flag)
            location.reload();
        }else{
            alert("You already picked 2 dates")
            alert(flag)
            location.reload();
        }
        
    }
}

function resetCalendar(){
    let reset = null;
    let resetMonth = 0;
    window.localStorage.setItem("pickedDate1Stored", reset);
    window.localStorage.setItem("pickedMonth1stored", reset);
    window.localStorage.setItem("pickedDate2Stored", reset);
    window.localStorage.setItem("pickedMonth2stored", reset);
    window.localStorage.setItem("monthChangeStored", resetMonth);
}

window.onload = getCurrentDate;