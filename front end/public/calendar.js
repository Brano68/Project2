var monthChange = 0;


function monthDecrease(){
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    
    if(monthChangeStored==null){
        window.localStorage.setItem("monthChangeStored", monthChange);
    }
    var monthChangeStored = window.localStorage.getItem("monthChangeStored");
    if(monthChangeStored>0){
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
    if(monthChangeStored<=4){
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

    var date1final = parseInt(window.localStorage.getItem("pickedDate1Stored")); 
    var date2final = parseInt(window.localStorage.getItem("pickedDate2Stored")); 
    var month1final = parseInt(window.localStorage.getItem("pickedMonth1Stored")); 
    var month2final = parseInt(window.localStorage.getItem("pickedMonth2Stored")); 
    var flag = window.localStorage.getItem("flagStored")

    

    for(var i = 1;i < numberOfDays+1;i++){
        if(month == d.getMonth() && i == day){
            $( "#dayDateDiv" ).append( '<div class="daysDivHighlighted" id="dayDate' + (i) + '"onClick="getOrderDate(this.id)"><p class="calDays">' + i + '</p></div>' );
        }else if(month == (month1final - 1)  && i == date1final){
            $( "#dayDateDiv" ).append( '<div class="daysDivPicked1" id="dayDate' + (i) + '"onClick="getOrderDate(this.id)"><p class="calDays">' + i + '</p></div>' );
        }else if(month == (month2final - 1) && i == date2final){
            $( "#dayDateDiv" ).append( '<div class="daysDivPicked2" id="dayDate' + (i) + '"onClick="getOrderDate(this.id)"><p class="calDays">' + i + '</p></div>' );
        }else{
            $( "#dayDateDiv" ).append( '<div class="daysDiv" id="dayDate' + (i) + '"onClick="getOrderDate(this.id)"><p class="calDays">' + i + '</p></div>' );
        }
        
    }

    

    console.log(date1final);
    console.log(month1final);
    console.log(date2final);
    console.log(month2final);
    console.log(flag);
    

};



function getOrderDate(clicked_id){
    let d = new Date();
    let flag = window.localStorage.getItem("flagStored");
    
    let monthChangeStored = window.localStorage.getItem("monthChangeStored");
    let pickedDate = document.getElementById(clicked_id).firstChild.innerHTML
    
    let pickedMonth = Number(d.getMonth()) + Number(monthChangeStored) + 1;
    
    function pickingOrderDate(){
        
        if(flag === "null"){
            window.localStorage.setItem("pickedDate1Stored", pickedDate)
            window.localStorage.setItem("pickedMonth1Stored",pickedMonth)
            
            let newFlag = 1;
            window.localStorage.setItem("flagStored", newFlag);
    
            location.reload();
            
        }
        else{
            if(flag === "1"){
                let pickedDate1Stored = window.localStorage.getItem("pickedDate1Stored")
                let pickedMonth1Stored = window.localStorage.getItem("pickedMonth1Stored")
                if(pickedDate == pickedDate1Stored && pickedMonth == pickedMonth1Stored){
                    pickedDate1Stored = null
                    pickedMonth1Stored = null
              
                    window.localStorage.setItem("pickedDate1Stored", pickedDate1Stored)
                    window.localStorage.setItem("pickedMonth1Stored", pickedMonth1Stored)
                    let newFlag = null;
                    window.localStorage.setItem("flagStored", newFlag)
                    location.reload();
                }else{
              
                    window.localStorage.setItem("pickedDate2Stored",pickedDate)
                    window.localStorage.setItem("pickedMonth2Stored", pickedMonth)
                    let newFlag = 2;
                    window.localStorage.setItem("flagStored", newFlag)
                    location.reload();
                }
            }else if(flag === "2"){
                let pickedDate2Stored = window.localStorage.getItem("pickedDate2Stored")
                let pickedMonth2Stored = window.localStorage.getItem("pickedMonth2Stored")
                if(pickedDate == pickedDate2Stored && pickedMonth == pickedMonth2Stored){
                    let pickedDate2Stored = null
                    let pickedMonth2Stored = null
                    window.localStorage.setItem("pickedDate2Stored",pickedDate2Stored)
                    window.localStorage.setItem("pickedMonth2Stored", pickedMonth2Stored)
                    let newFlag = 1
                    window.localStorage.setItem("flagStored", newFlag)
                    location.reload();
                }else if(pickedDate == pickedDate1Stored && pickedMonth == pickedMonth1Stored){
                    let pickedDate1Stored = null
                    let pickedMonth1Stored = null
                    window.localStorage.setItem("pickedDate1Stored",pickedDate1Stored)
                    window.localStorage.setItem("pickedMonth1Stored", pickedMonth1Stored)
                    let newFlag = 1
                    window.localStorage.setItem("flagStored", newFlag)
                    location.reload();
                }
                else{
                    resetCalendar();
                    location.reload();
                }  
            }
        }
    }
    pickingOrderDate();
    
    
}

function resetCalendar(){
    let reset = null;
    let resetMonth = 0;
    window.localStorage.setItem("pickedDate1Stored", reset);
    window.localStorage.setItem("pickedMonth1stored", reset);
    window.localStorage.setItem("pickedDate2Stored", reset);
    window.localStorage.setItem("pickedMonth2stored", reset);
    window.localStorage.setItem("monthChangeStored", resetMonth);
    window.localStorage.setItem("flagStored", reset);
}

window.onload = getCurrentDate;