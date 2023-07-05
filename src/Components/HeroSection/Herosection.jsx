import './Herosection.css';
import React from 'react';
import img2 from './Images/createwordpressheroimage-780x410.png'

const Herosection = () => {
    return ( 
    <div className="section">
        <div className="Herosection">
          <h1 className="heading">Title</h1>
          <p className="content">
            Major display content
          </p>
          <button>
            <a href="https://www.linkedin.com/in/hardik-mehra-9667a242002/">
              Know Me
            </a>
          </button>
        </div>
        <div className="Image2">
            <img src={img2} alt='image'></img>
        </div>
    </div>
    
    );
}
 
export default Herosection;