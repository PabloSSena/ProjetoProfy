import React from 'react';
import logoImg from '../../Assets/images/logo.svg';
import landingIgm from '../../Assets/images/landing.svg';
import studyIcon from '../../Assets/images/icons/study.svg';
import giveClassesIcon from '../../Assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../Assets/images/icons/purple-heart.svg';
import './styles.css';





function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="A logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingIgm} alt="" className="hero-image"/>x  

                <div className="buttons-container">

                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </a>
                </div>
                <span className="total-connections">
                    total de 200 conexões ja realizadas <img src={purpleHeartIcon} alt="Coraçao roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;