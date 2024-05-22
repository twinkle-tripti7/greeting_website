import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let currDate= new Date(2024,5,22,21);
currDate =currDate.getHours();
let greeting ='';
const cssStyle={};

if(currDate>=1 && currDate<12){
greeting='Good Morning';
cssStyle.color="green";
}
else if(currDate>=12 && currDate <19){
  greeting='Good Afternoon';
  cssStyle.color="Blue";
}

else{
  greeting ='Good Night';
  cssStyle.color="Black";
}


ReactDOM.render(
  <>
  <div className='box'>
<h1>Hello Tripti ,<span style={cssStyle} >{greeting} </span></h1>
</div>
</>,
 document.getElementById("root"));