/* JavaScript code here */
//Task1
console.log("External JS")

// Task2
function sumArray(arr){
    var sum =0;
    arr.forEach(function(value, index){
        sum+=value;
    });
    return sum;
}
console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([1,20,-3,45]));

function checkEmail(emailString){
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var match = emailFormat.test(emailString);
    return match;
}
console.log(checkEmail("jog@smith.com"))
console.log(checkEmail("animlive.com"))