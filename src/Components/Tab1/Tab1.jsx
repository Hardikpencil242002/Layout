import img3 from './Images/Icon.png'
import React from "react";
import './Tab1.css';

const Tab1 = () => {
    return ( 
    <div className="innercontent">
        <div className="Logo1">
            <img src={img3} alt='image'>
            </img>
            <p>
                1Content that can be displayed along the images
            </p>
        </div>

        <div className="Logo2">
            <img src={img3} alt='image'>
            </img>
            <p>
                2Content that can be displayed along the images
            </p>
        </div>

        <div className="Logo3">
            <img src={img3} alt='image'>
            </img>
            <p>
                3Content that can be displayed along the images
            </p>
        </div>

        <div className="Logo4">
            <img src={img3} alt='image'>
            </img>
            <p>
                4Content that can be displayed along the images
            </p>
        </div>

        <div className="Logo5">
            <img src={img3} alt='image'>
            </img>
            <p>
                5Content that can be displayed along the images
            </p>
        </div>

        <div className="Logo6">
            <img src={img3} alt='image'>
            </img>
            <p>
                6Content that can be displayed along the images
            </p>
        </div>
    </div>    
    );
}
 
export default Tab1;