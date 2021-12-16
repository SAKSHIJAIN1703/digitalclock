
import React from 'react';

import SetTime from "./SetTime";
import './App.css';

let time = new Date();
let samay  = time.getHours();
const cssStyle = {};
console.log("Anand"); 
let greeting = '';
if(samay>=1 && samay<12){
  greeting = 'Good Morning';
  cssStyle.color = "Green";

  }
else if (samay>=12 && samay<16){
  greeting = 'Good Afternoon';
  cssStyle.color = "Orange";

}
else if (samay>=16 && samay<20){
  greeting = 'Good Evening';
  cssStyle.color = "Grey";
}
else{
  greeting = 'Good Night';
  cssStyle.color = "pink";
}
return(
  
  <>
  <SetTime/>
  <div className = "container">
    <div className = "small_container">
      <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  </div>
  </>,
  document.getElementById('root')
);
export default App