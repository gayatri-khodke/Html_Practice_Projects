//console.log("hello world");

//console.log("hello gayatri");
function findmax(arr){
    let max1 = arr[0];
    let index = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max1){
            max1 = arr[i];
            index = i;
        }
    };
    return [max1,index];
}

var total = document.getElementsByClassName("total-mark");
var student = document.getElementsByClassName("student-name");
const totalArray=Array.from(total,element => element.innerText);

function getmax(){
var max = findmax(totalArray);
let maxToper = max[0];
var nameindex = max[1];
var studentname = student[nameindex].innerText;
let element = document.getElementById("result");
element.innerText=`Topper is ${studentname} and his Marks is ${maxToper}`
}





































