import React,{useState} from 'react';
import PageHeader from '../../Components/PageHeader';
import './styles.css';
import Input from '../../Components/Input';
import warningIcon from '../..//Assets/images/icons/warning.svg'
import Textarea from '../../Components/Textarea';
import Select from '../../Components/Select';

function TeacherForm(){

    const [scheduleItems,setScheduleItems] = useState([
        {week_day:0,from:'',to:''}
    ])

    function addNewScheduleItem(){

        setScheduleItems([
            ...scheduleItems,
            {week_day:0,from:'',to:''}
        ]);
    }

    return(
        <div id="page-teacher-form" className="container">
        <PageHeader 
            description="O primeiro passo é preencher esse formulario de inscrição"        
            title="Que incrivel que você quer dar aulas"

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

            <fieldset>
                <legend>
                    <span>Horários disponiveis</span>
                    <button type='button'onClick={addNewScheduleItem}>+  Novo horário</button>
                </legend>

                {scheduleItems.map(scheduleItem => {
                    return (<div key={scheduleItem.week_day}  className="schedule-item">
                    <Select name="week_day" label="Dia da semana" 
                        options={[
                            {value:'0', label:"Domingo"},
                            {value:'1', label:"Segunda"},
                            {value:'2', label:"Terça"},
                            {value:'3', label:"Quarta"},
                            {value:'4', label:"Quinta"},
                            {value:'5', label:"Sexta"},
                            {value:'6', label:"Sabado"},
                    ]}/>

                    <Input name='from' label='Das' type='time'></Input>
                    <Input name='to' label='Até' type='time'></Input>

                            
                </div>)
                })}
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