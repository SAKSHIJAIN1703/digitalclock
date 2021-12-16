import React from 'react';
import ReactDOM from 'react-dom';
import SetTime from "./SetTime";
import Mrng from './gdmrng.mp3';
import Noon from './gdnoon.mp3';
import Evng from  './gdmrng.mp3';
import Night from './gdnoon.mp3'
import "./index.css";

let time = new Date();
let samay  = time.getHours()//actual time k liye getHours use krte h.//
const cssStyle = {};

console.log("Sakshi"); 
let greeting = '';
let audio = '';



if(samay>=1 && samay<12){
  greeting = 'good morning';
  audio=<audio controls>
  <source src={Mrng} type="audio/ogg"/>
</audio>
  cssStyle.color ="Green";

    
  }
else if (samay>=12 && samay<16){
  greeting = 'Good Afternoon';
  cssStyle.color = "Orange";
  audio=<audio controls>
  <source src={Noon} type="audio/ogg"/>
</audio>

}
else if (samay>=16 && samay<20){
  greeting = 'Good Evening';
  cssStyle.color = "Grey";
  audio=<audio controls>
  <source src={Evng} type="audio/ogg"/>
</audio>
}
else{
  greeting = 'Good Night';
 audio = <audio controls>
 <source src={Night} type="audio/ogg"/>
</audio>;

      

}

ReactDOM.render(
  
  <>
  <SetTime/>
  <div className = "container">
  
    <div className = "small_container">
      <h1>Hello sakshi jain, <span style={cssStyle}>{greeting}</span></h1>
      <h2>{audio}</h2>
      
  
    </div>
  </div>
  </>,
  document.getElementById('root')
 
  
);
/* {(samay>=1 && samay<12)?
    greeting = 'Good Morning'
   
 :
  (samay>=12 && samay<16)?
  greeting = 'Good Afternoon'
  
  : greeting = <b>'Good Night'</b>

     }*/