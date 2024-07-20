
 function myFunction() {
  const elements = document.querySelectorAll(".list"); // Convert NodeList to an array
  console.log(elements);
 const values = [];

  // Concatenate the inner text of the elements
  elements.forEach((element) => {
    values.push(element.textContent);
  });
  //console.log(values);
    values.sort(function(){return 0.5 - Math.random()});

    for(let i=0;i<values.length;i++){
       elements[i].innerText=values[i];
    }

  // const myArrayElement = document.getElementById("demo");
  // myArrayElement.innerText = values;
}








































