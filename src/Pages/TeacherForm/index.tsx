import React from 'react';
import PageHeader from '../../Components/PageHeader';
import './styles.css';
import Input from '../../Components/Input';
import warningIcon from '../..//Assets/images/icons/warning.svg'

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Que incrivel que você quer dar aulas"
            description="O primeiro passo é preencher esse formulario de inscrição"        

        />

        <main>
            <fieldset>
                <legend>Seus dados</legend>

                <Input name="name" label="Nome completo"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="Whatsapp"/>

            </fieldset>

            <fieldset>
                <legend>Sobre a aula</legend>

                <Input name="subject" label="Matéria"/>
                <Input name="cost" label="Custo da sua hora por aula"/>
        
            </fieldset>

            <footer>
                <p><img src={warningIcon} alt="Aviso importante"/>
                Importante!!! <br/>
                Preencha todos os dados
                </p>
                <button type="button">Salvar cadastro</button>
            </footer>
        </main>
    </div>
    )
}

export default TeacherForm;