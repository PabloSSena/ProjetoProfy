import React from 'react';
import PageHeader from '../../Components/PageHeader';
import './styles.css';
import Input from '../../Components/Input';
import warningIcon from '../..//Assets/images/icons/warning.svg'
import Textarea from '../../Components/Textarea';
import Select from '../../Components/Select';

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
                <Textarea name="bio" label="Biografia"/>

            </fieldset>

            <fieldset>
                <legend>Sobre a aula</legend>

                <Select name="subject" label="Matéria" 
                options={[
                    {value:'Artes', label:"Artes"},
                    {value:'Biologia', label:"Biologia"},
                    {value:'Ciencias', label:"Ciencias"},
                    {value:'Ed.fisica', label:"Ed.fisica"},
                    {value:'Geografia', label:"Geografia"},
                    {value:'História', label:"História"},
                    {value:'Matemática', label:"Matemática"},
                    {value:'Quimica', label:"Quimica"},


                    

                ]}/>
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