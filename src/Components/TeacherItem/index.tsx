import React from 'react';
import whatsappIcon from '../../Assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/58041720?s=460&u=93c48eba3831cf92c750ff717838fabac6a4f5a0&v=4" alt="Pablo Sena"/>
                        <div>
                            <strong>Pablo Sena</strong>
                            <span>Programação</span>
                        </div>
                    </header>

                    <p>
                        Aprender a programar é facil,você só precisa de um computador,tempo e desistir de todos os outros aspectos da sua vida. 
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;