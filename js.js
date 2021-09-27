

function cToF(celsius1, celsius2, celsius3) 
{
  var cTemp1 = celsius1;
  var cTemp2 = celsius2;
  var cTemp3 = celsius3;

  var fTemp1 = cTemp1 * 9 / 5 + 32;
  var fTemp2 = cTemp2 * 9 / 5 + 32;
  var fTemp3 = cTemp3 * 9 / 5 + 32;
  var message1 = fTemp1 + ' \xB0F.';
  var message2 = fTemp2 + ' \xB0F.';
  var message3 = fTemp3 + ' \xB0F.';
  document.getElementById("demo1").innerHTML = message1;
  document.getElementById("demo2").innerHTML = message2;
  document.getElementById("demo3").innerHTML = message3;
 
}



function fToC(fahrenheit1, fahrenheit2, fahrenheit3) 
{
  var fTemp1 = fahrenheit1;
  var fTemp2 = fahrenheit2;
  var fTemp3 = fahrenheit3;
  var cTemp1 = (fTemp1 - 32) * 5 / 9;
  var cTemp2 = (fTemp2 - 32) * 5 / 9;
  var cTemp3 = (fTemp3 - 32) * 5 / 9;
  var message1 =cTemp1 + '\xB0C.';
  var message2 =cTemp2 + '\xB0C.';
  var message3 =cTemp3 + '\xB0C.';
     document.getElementById("demo1").innerHTML = message1;
     document.getElementById("demo2").innerHTML = message2;
     document.getElementById("demo3").innerHTML = message3;
} 

function date1() 
{
    var d = new Date();
    var flag=0;
    
    
    for(let i=0;i<4;i++){

        
        if(d.getMonth()==i){
            flag=1;
            let a= d.getDate();
            let b= d.getMonth();
            let c= d.getFullYear();
            var dateStr = a + "/" + b + "/" + c;

            document.getElementById("demo1").innerHTML = dateStr;
            break;
            
           

        }
    }
    if(flag==0){

        var date = getRandomArbitrary(1,31);
    var month =  ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var r= getRandomArbitrary(0,4) ;  
    var n = month[r];
    var year = d.getFullYear() + 1;
        
    var dateStr = date + "/" + n + "/" + year;
    document.getElementById("demo1").innerHTML = dateStr;
    
    }
}

function date2() 
{
    var d = new Date();
    var flag=0;
    if(4<d.getMonth()){
        var year = d.getFullYear() + 1;

    }
    else{
        var year = d.getFullYear();
    }

    
    for(var i=4;i<8;i++){

        
        if(d.getMonth()==i){
            flag=1;
            let a= d.getDate();
            let b= d.getMonth();
            let c= d.getFullYear();
            var dateStr = a + "/" + b + "/" + c;

            document.getElementById("demo2").innerHTML = dateStr;
            break;
            
           

        }
        
    }
    if(flag==0){

        var date = getRandomArbitrary(1,31);
    var month =  ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var r= getRandomArbitrary(4,8) ;  
    var n = month[r];
    
        
    var dateStr = date + "/" + n + "/" + year;
    document.getElementById("demo2").innerHTML = dateStr;
    
    }
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function date3() 
{
    var d = new Date();
    var flag=0;
    if(8<d.getMonth()){
        var year = d.getFullYear() + 1;

    }
    else{
        var year = d.getFullYear();
    }
    
    for(let i=8;i<12;i++){

        
        if(d.getMonth()==i){
            flag=1;
            let a= d.getDate();
            let b= d.getMonth();
            let c= d.getFullYear();
            var dateStr = a + "/" + b + "/" + c;

            document.getElementById("demo3").innerHTML = dateStr;
            break;
            
           

        }
    }
    if(flag==0){

        var date = getRandomArbitrary(1,31);
    var month =  ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var r= getRandomArbitrary(8,12) ;  
    var n = month[r];
    
        
    var dateStr = date + "/" + n + "/" + year;
    document.getElementById("demo3").innerHTML = dateStr;
    
    }
}
    
        
    

    
   

