import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand.png'
import hero_image from '../Assets/hero.jpeg'
import arrow_icon from '../Assets/arrow.png'




export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>We're a</h2>
                <h2>Premium</h2>
                <h2>Clothing Brand</h2>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>

        </div>
    )
}


