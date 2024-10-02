import React from "react";


import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Leader = ({ value,name }) => {
  return (
   
      <div style={{ width: 200, height: 200}}>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            pathColor: `rgba(62, 152, 199, ${value / 100})`,
            textColor: "blue",
            textAlign:'center',
            textSize:'1.5rem',
            trailColor: "#d6d6d6",
            backgroundColor: "#3e99c7",
          })}
        />
           <h2 style={{backgroundColor:'yellow',borderRadius:'3rem',width:'6rem',height:'3rem',textAlign:'center'}}>{name}</h2>
      </div>
   
  );
};
export default Leader;
