import React from 'react'
import './nav.css'

function Nav() {
    return (
        <div className="Nav">
            <img src="./img/logo.png" alt="" className="Logo" />
            <ul>
                <li onClick={ () => window.scrollTo(0,0)}>Home</li>
                <li onClick={ () => window.scrollTo(0,window.innerHeight*0.85)}>About us</li>
                <li onClick={ () => window.scrollTo(0,window.innerHeight*0.85)}>Tasks</li>
                <li onClick={ () => window.scrollTo(0,window.innerHeight*1.75)}>Incentive</li>
                <li onClick={ () => window.scrollTo(0,window.innerHeight*2.85)}>Shop</li>
                <li onClick={ () => window.scrollTo(0,window.innerHeight*3)}>Contact Us</li>
            </ul>
            <h3>Login/Sign Up</h3>
            <img src="./img/user.png" alt="" className="User"/>
        </div>
    )
}

export default Nav
