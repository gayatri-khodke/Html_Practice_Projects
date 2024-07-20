//closure 
//js has lexical scope. means function has access to parents function's variable.

// var sum=function(a){
//     console.log("live viewers "+a);
//     var c=2;
//     return function(b){
//         return a+b+c;
//     }
// }
// var store=sum(5);
// console.log(store(3));


//function1 can return function which can be one or more than one function see bellow ex
//function can access parents function's variable.
// var sum=function(a,b,c){
//    return{
//     getsumTwo:function(){
//         return a+b;
//     },
//     getsumThree:function(){
//         return a+b+c;
//     }
//    }
// }
// var store=sum(2,3,4);   //calling function
// console.log(store.getsumTwo());
// console.log(store.getsumThree());


//can call again ang get different variable values ang store different variable
// var store1=sum(3,5,7);
// console.log(store1.getsumTwo());
// console.log(store.getsumThree());

//objects 
//how to iterate on object with object.keys method

// const myobj={
//     a:"gaurav",
//     b:"1",
//     c:false
// };
//access the property name 
// Object.keys(myobj).forEach((i)=>{
//     console.log(i);
// });

//access the property value
// Object.keys(myobj).forEach((i)=>{
//     console.log(myobj[i]);
// });

//access object's value in array form
// let value=Object.values(myobj);
// console.log(value);

//we can perform the operation on value now

//object.entries
//we can access each and every property and value and single array 
//let entries=Object.entries(myobj);
//if there is three property it will return all three array 
//console.log(entries);
//console.log(entries[0]); access endusijul array













