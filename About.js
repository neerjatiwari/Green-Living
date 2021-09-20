import React from 'react'
import './About.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function About() {
    return (
        <div className="About">
            <div className="about">
                <div className="info">
                    <h1>About us</h1>
                    <p>We are a team of female sophomores from Information Technology department of Maharaja Agrasen Institute of Technology, 
                        GGSIPU, India. This is our first project as a team and our first hackathon as well. We hope this website helps in involvement
                        of people towards environment conservation and create a healthier society. </p>
                </div>
                <img src="./img/About.png" alt="" />
            </div>
            <div className="task">
                <img src="./img/Task.png" alt="" />
                <div className="inf">
                    <h1>Tasks and Challenges</h1>
                    <p>In order to spread more awareness about climate change and highlight the critical environment related issues, we have arranged different tasks and challenges for every age group. Let us complete them together and make a difference.</p>
                </div>
            </div>
            <hr />
            <div className="Incentives">
                    <h1>Incentives</h1>
                    <p>Throughout your journey of green living, as you keep completing the tasks, we provide you with badges. After successfully completing all the tasks, you are given an e-certificate to acknowledge your sincerity towards environment conservation. You can also share your experiences and stories to inspire others to work towards eco-friendly lifestyle. We believe that awareness and mass involvement can make a significant difference therefore we also provide a newsletter to increase climate change literacy and ways to fix it.</p>
                <div className="icons">
                    <div className="icn">
                        <img src="./img/badges.png" alt="" />
                        <h1>Badges</h1>
                    </div>
                    <div className="icn">
                        <img src="./img/certificate.png" alt="" />
                        <h1>Certificate</h1>
                    </div>
                    <div className="icn">
                        <img src="./img/newsletter.png" alt="" />
                        <h1>Newsletter</h1>
                    </div>
                    <div className="icn">
                        <img src="./img/story.png" alt="" />
                        <h1>Share your story</h1>
                    </div>
                </div>
            </div>
            <hr />
            <div className="Shop">
                <div className="about">
                <div className="info">
                    <h1>Green Shopping</h1>
                    <p>Green shopping involves learning how to buy smartly and keeping environmental considerations in mind. Our team has made arranged some verified eco-friendly products that are relatively less harmful for our environment than other alternatives available in the market. </p>
                </div>
                <img src="./img/Shop.png" alt="" />
            </div>
            </div>
            <div className="Footer">
                <h1>Contact Us</h1>
                <h2>devpost link</h2>
                <a href="">neerjatiwari142002@gmail.com</a>
            </div>
        </div>
    )
}

export default About
