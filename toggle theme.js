const elementRef= document.querySelector(".dark");
console.log(elementRef)

elementRef.style.backgroundColor= "black";
elementRef.style.color = "white";

const btnReferance=document.querySelector(".btnTheme");
function toggleTheme(){
  const referenceEl = document.querySelector(".dark");
  let currentTheme = elementRef.style.backgroundColor;
  console.log(currentTheme);


  if(currentTheme==="black"){
    elementRef.style.backgroundColor="white";
    elementRef.style.color="black";
  }
else if (currentTheme === "white"){
  elementRef.style.backgroundColor="black";
  elementRef.style.color="white";
}
else{
  elementRef.style.backgroundColor="black";
  elementRef.style.color="white";
}
}