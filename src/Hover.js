import React, { useState } from "react";
import CSS from './App.css';

const Himage = "https://www.nationalgeographic.com/content/dam/animals/2020/06/fathers-day-gallery/fathers-day-1.adapt.885.1.jpg"

function Hover() {
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <div className="Hover">
      <button 
        onMouseEnter={() => setIsDisplay(true)}
        onMouseLeave={() => setIsDisplay(false)}
        style={{ background: "blue", fontFamily: "fantasy" }}
      >
        Hello hover over on me!!!
      </button>
      {isDisplay && <div claaName="HContent">This is the Hover it's when we click the OR Over the Mouse it will show Image <br /> <img className="Himage" src={Himage} /></div>}
    </div>    
  )
}

export default Hover;