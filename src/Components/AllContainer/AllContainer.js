import React from "react";
import GridContainer from "../GridContainer/GridContainer";
import AboutContainer from "../AboutContainer/AboutContainer";
import TokenomicsContainer from "../TokenomicsContinaer/TokenomicsContainer";


const AllContainer = () => {
    return(
        <div style={{backgroundColor:"#00161D"}}>
            <GridContainer/>
            <AboutContainer/>
            <TokenomicsContainer/>
          
        </div>
    )
}

export default AllContainer;