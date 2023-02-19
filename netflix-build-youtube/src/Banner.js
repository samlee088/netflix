import React from 'react';
import './Banner.css';

function Banner () {
    return (
        <header className = 'banner' style={{
            backgroundSize: 'cover',
            // backgroundImage: `url("https://pixy.org/src/49/491517.png")`,
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")`,
            backgroundPosition: "center center",
        }}>
            <div className = "banner_contents">
                <h1 className = "banner_title">
                    Movie Name
                </h1>
                <div className = "banner_buttons">
                    <button className = "banner_button"> Play </button>
                    <button className = "banner_button"> My List </button>
                    <h1 className = "banner_description"> 
                        This is a text banner_description
                    </h1>
                </div>
            </div>
            <div 
                className = "banner--fadeBottom" 
            />
        </header>
    )
}

export default Banner