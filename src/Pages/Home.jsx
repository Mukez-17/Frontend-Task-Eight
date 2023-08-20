import React, { useState } from 'react';
import Navigation from "../Navigation/Navigation";
import { Link } from 'react-router-dom';
import DeepPurple from "../Images/iPhone_14_Pro_Max_Deep_Purple.png";
import Gold from "../Images/iPhone_14_Pro_Max_Gold.png";
import Silver from "../Images/iPhone_14_Pro_Max_Silver.png";
import SpaceBlack from "../Images/iPhone_14_Pro_Max_Space_Black.png";
import "./Home.css";

const Home = () => {
    const [imgSrc, setImgSrc] = useState(DeepPurple);
    const [imgName, setImgName] = useState("Deep Purple");
    
  return (
    <>
        <Navigation />
        <div className="main">
            <div className="col col1">
                <h4>iPhone 14 Pro</h4>
                <button 
                    className="text"
                    type='none'
                >
                Pro.Beyond.
                </button>
                <br />
                <Link to="/specs">
                    <button className='btn'>Know More &gt;</button>
                </Link>
            </div>
            <div className="col">
                <p>{imgName}</p>
                <div className="buttons">
                    <button 
                        className="items-button"
                        type='button'
                        onClick={() => {
                            setImgSrc(DeepPurple)
                            setImgName("Deep Purple")
                        }}
                        style={{backgroundColor:"#594f63"}}
                    >
                    </button>
                    <button 
                        className="items-button"
                        type='button'
                        onClick={() => {
                            setImgSrc(Gold)
                            setImgName("Gold")
                        }}
                        style={{backgroundColor:"#f4e8ce"}}
                    >
                    </button>
                    <button 
                        className="items-button"
                        type='button'
                        onClick={() => {
                            setImgSrc(Silver)
                            setImgName("Silver")
                        }}
                        style={{backgroundColor:"#f0f2f2"}}
                    >
                    </button>
                    <button 
                        className="items-button"
                        type='button'
                        onClick={() => {
                            setImgSrc(SpaceBlack)
                            setImgName("Space Black")
                        }}
                        style={{backgroundColor:"#403e3d"}}
                    >
                    </button>
                </div>
                <img className='main-image is-active' src={imgSrc} alt={imgName} />
            </div>
        </div>
    </>
  )
}

export default Home