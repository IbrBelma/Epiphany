import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function About (){
    const [text] = useTypewriter({
        words: ['Frontend Developeri', ' Programeri', ' Graphic Dizajneri'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: {}, 
    })

    return(
        <div className="about">
            <div className="about-content">
                <h3>Zdravo, mi smo</h3>
                <h1>Belma i Adna,</h1>
                <h3>te smo <span>{text}</span><Cursor/></h3>
                <p>Studiramo Software engieering na Politehnickom fakultetu u Zenici.<br/>Druga smo godina fakulteta, te nastojimo da usavrsimo nase sposobnosti<br/> Frontend Developing-a. Kliknite na slike za Instagram!
                </p>
            </div>
            <div className="boks">
                <div className="kontext">
                    <img src="Slike/belma.jpg"alt="" />
                    <h2>Belma Ibrahimagic<br/><span>Graphic Designer</span></h2>
                    <a href="https://www.instagram.com/bechkyy/?igshid=YmMyMTA2M2Y%3D">Instagram</a>
                 </div>
            </div>
            <div className="boks">
                <div className="kontext">
                    <img src="Slike/adna.jpg"alt="" />
                    <h2>Adna Hamzic<br/><span>Frontend Developer</span></h2>
                    <a href="https://www.instagram.com/h_adnaa1/">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default About;