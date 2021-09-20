import React from 'react'
import Slider from 'infinite-react-carousel';
import './Slider.css'
function Slid() {
    const images = [
        { url: "./img/transition-img-1.png" },
        { url: "./img/transition-img-2.png" },
        { url: "./img/transition-img-3.png" },
        { url: "./img/transition-img-4.png" },
        { url: "./img/transition-img-5.png" },
    ];
    return (
        <div className="Slider">
            <Slider 
            dots = {true}
            autoplay={true}
            autoplaySpeed = {2000}
            >
            {images.map(img => (
            <div className="img">
                <img src={img.url} alt="" />
            </div>
            ))}
        </Slider>
        <p>We all know how urgent the matter of climate change is. Our daily activities affect our environment in many ways and sometimes in the worst ways too. A single person can’t fix this but together we can make an impact. Keeping this collective responsibility in mind, our team “green living” has prepared different easy-to-follow tasks for different age groups to promote a healthier and eco-friendly lifestyle. Along with this we have also made a list of some verified daily use nature friendly products. We hope you enjoy this green journey. Together we can make a change. 
            <b> Happy green living</b></p>
        <hr />
        </div>
    )
}

export default Slid
