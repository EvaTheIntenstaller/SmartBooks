import React from "react";
import { Button } from "./Button";
import '../Styling/HeroSection.css';
import '../../App.js';

function HeroSection()
{
    return(
        <div className="hero-container">
            <video src="https://github.com/briancodex/react-website-v1/blob/master/public/videos/video-1.mp4" autoPlay loop muted />
            <h1>IMAGINATION AWAITS</h1>
            <p>What are you looking for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
            
                <Button className="btns" buttonStyle="btn--primary"
                buttonSize='btn--large'>
                        SEE RECOMMENDATION      
                </Button>
                
            </div>
        </div>
    );
}

export default HeroSection;