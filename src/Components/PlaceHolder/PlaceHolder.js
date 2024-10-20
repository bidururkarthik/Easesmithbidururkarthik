import React, { useState, useRef } from 'react';
import './PlaceHolder.css'; // Assuming you store the CSS in a separate file
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const PlaceHolder = () => {
  const [position, setPosition] = useState(0); // to track the current position
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  const itemsPerSlide = 210; // The width of each item

  const handlePrev = () => {
    if (position > 0) {
      setPosition((prevPosition) => prevPosition - 1);
    }
  };

  const handleNext = () => {
    if (position >= 0 && position < hiddenItems()) {
      setPosition((prevPosition) => prevPosition + 1);
    }
  };

  const hiddenItems = () => {
    const items = slideRef.current.childNodes.length;
    const visibleItems = sliderRef.current.offsetWidth / itemsPerSlide;
    return items - Math.ceil(visibleItems);
  };

  return (
    <div className="slider" ref={sliderRef} style={{marginTop:"40px"}}>
      <h1 style={{fontSize:"24px",fontWeight:"600"}}>Nursery</h1>
      <div className="slide" ref={slideRef} style={{ left: `${position * -itemsPerSlide}px` }}>
      <div >
        <img className="item " src="./image/c6.png" alt="Product 1" />
        <p style={{width:"172px",height:"81px",textAlign:"center"}}>  </p>
        </div>

        <div >
        <img className="item " src="./image/c6.png" alt="Product 1" />
        <p style={{width:"172px",height:"81px",textAlign:"center"}}>  </p>
        </div>

        <div >
        <img className="item " src="./image/c6.png" alt="Product 1" />
        <p style={{width:"172px",height:"81px",textAlign:"center"}}>  </p>
        </div>

        <div >
        <img className="item " src="./image/c6.png" alt="Product 1" />
        <p style={{width:"172px",height:"81px",textAlign:"center"}}>  </p>
        </div>

        <div >
        <img className="item " src="./image/c6.png" alt="Product 1" />
        <p style={{width:"172px",height:"81px",textAlign:"center"}}>  </p>
        </div>

        <div >
        <img className="item " src="./image/c6.png" alt="Product 1" />
        <p style={{width:"172px",height:"81px",textAlign:"center"}}>  </p>
        </div>

        <div >
        <img className="item " src="./image/c6.png" alt="Product 1" />
        <p style={{width:"172px",height:"81px",textAlign:"center"}}>  </p>
        </div>
       
      </div>
      <button className="ctrl-btn pro-prev" onClick={handlePrev}>
        <IoIosArrowBack style={{fontWeight:"bold",fontSize:"40px"}}/>
      </button>
      <button className="ctrl-btn pro-next" onClick={handleNext} >
        <IoIosArrowForward style={{fontWeight:"bold",fontSize:"40px"}}/>
      </button>
    </div>
  );
};

export default PlaceHolder;
