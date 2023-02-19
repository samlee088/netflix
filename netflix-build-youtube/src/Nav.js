import React from 'react';
import './Nav.css';





function Nav() {
    return(
        <div className = 'nav'>
            <div className = 'nav_contents'>
                <img 
                    className = 'nav_logo'
                    src='https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png' 
                    alt='netflix logo' 
                />

                <img 
                    className = 'nav_avatar' 
                    src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt = "netflix avatar placeholder" 
                />
            </div>
            <h1> This is the Nav </h1>;
        </div>
    )
}

export default Nav;