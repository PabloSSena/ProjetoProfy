import React from 'react';
import PageHeader from '../../Components/PageHeader'
import whatsappIcon from '../../Assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title ="Estes são os proffys disponiveis">
                <form id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/58041720?s=460&u=93c48eba3831cf92c750ff717838fabac6a4f5a0&v=4" alt="Pablo Sena"/>
                        <div>
                            <strong>Pablo Sena</strong>
                            <span>Programção</span>
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
            </main>
        </div>
    )
}

export default TeacherList;