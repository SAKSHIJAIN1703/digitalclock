import React from 'react';
import './index.css';

function SetDate(){
    const d=new Date()
    const weekday=['sun','mon','tue','wed','thrus','fri','sat'];
    const months=['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']

    const day=weekday[d.getDay()]
    const month=months[d.getMonth()]
    const date=d.getDate()
    const year=d.getFullYear()


  
return(
  <>
  <div className='main'>
      <div className='date'>
          <h1>{day}</h1>
          <h1>{date}</h1>
          <h1>{month}</h1>
          <h1>{year}</h1>
      </div>
  </div>
  </>
);
};
export default SetDate;