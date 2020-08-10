import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../Assets/images/logo.svg';
import landingIgm from '../../Assets/images/landing.svg';
import studyIcon from '../../Assets/images/icons/study.svg';
import giveClassesIcon from '../../Assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../Assets/images/icons/purple-heart.svg';
import './styles.css';
import api from '../../Services/api';





function Landing(){
    const [totalCOnnections,setTotalConnections] = useState(0)

    useEffect(()=>{
        api.get('connections').then(response => {
            const {total} = response.data;
            setTotalConnections(total)
        })
    },[])

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="A logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingIgm} alt="" className="hero-image"/>x  

                <div className="buttons-container">

                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    total de {totalCOnnections} conexões ja realizadas <img src={purpleHeartIcon} alt="Coraçao roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;