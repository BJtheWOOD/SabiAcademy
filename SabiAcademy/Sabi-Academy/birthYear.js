
// =+=
// var myInput = document.getElementById("bddate");
// var now =2019
// function calculateAge(yearOfBirth) {
//     var age = 2019 - yearOfBirth;
    
// }
// if (myInput <= 2005) {
    
// }


// <input type='text' name='dob' onblur="Age_validator(this.value)" style='width:108px;' />
// <div><span id="dob1"></span></div>
// function Age_validator(str){
//     // which user inputs
//     str = str.split("-");
//     var dd = str[0];
//     var mm = str[1];
//     var yy = str[2];
//     // Current date calculation
//     var d = new Date();
//     var ds = d.getDate();
//     var ms = d.getMonth();
//     var ys = d.getFullYear();
//     // convert 18years as days from current date
//     var days = ((18 * 12) * 30) + (ms * 30) + ds;
//     // convert days from input value
//     var age = (((ys - yy) * 12) * 30) + ((12 - mm) * 30) + parseInt(30 - dd);

//     if((days - age) <= '0'){
//         console.log((days - age));
//         document.getElementById('dob1').innerHTML = 'Valid';
//         // or return your own script
//     }else{
//         console.log((days - age));
//         document.getElementById('dob1').innerHTML = 'Invalid';
//         // or return your own script
//     }
// }

function userAge(myInput) {
    var myInput = document.getElementById("bddate");
    var cAge = 14;
    var age = 2019 - myInput; 
    console.log(myInput);
    
    // if (age <= cAge) {
    //     console.log("not yet age");
        
    // } else {
    //     console.log("addsdult");
        
    }
