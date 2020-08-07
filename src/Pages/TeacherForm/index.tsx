import React from 'react';
import PageHeader from '../../Components/PageHeader';
import './styles.css';
import Input from '../../Components/Input';

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

                <Input name="name" label="Nome completo"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="Whatsapp"/>
        
            </fieldset>
        </main>
    </div>
    )
}

export default TeacherForm;