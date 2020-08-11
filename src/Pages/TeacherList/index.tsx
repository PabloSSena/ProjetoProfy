import React, { useState, FormEvent } from 'react';
import PageHeader from '../../Components/PageHeader'
import TeacherItem from '../../Components/TeacherItem';

import './styles.css';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

function TeacherList(){
    const [subject,setSubject] = useState('');
    const [weekDay,setWeekDay] = useState('');
    const [time,setTime] = useState('');

    function searchTeachers(e:FormEvent){
        e.preventDefault();
    }


    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title ="Estes são os proffys disponiveis">
                <form id="search-teachers" onSubmit={}>
                    
                <Select 
                    name="subject" 
                    label="Matéria"
                    value={subject}
                    onChange={e =>{setSubject(e.target.value)}} 
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
                 <Select 
                    name="week_day"    
                    label="Dia da semana"
                    value={weekDay}
                    onChange={e =>{setWeekDay(e.target.value)}}  
                    options={[
                        {value:'0', label:"Domingo"},
                        {value:'1', label:"Segunda"},
                        {value:'2', label:"Terça"},
                        {value:'3', label:"Quarta"},
                        {value:'4', label:"Quinta"},
                        {value:'5', label:"Sexta"},
                        {value:'6', label:"Sabado"},
                ]}/>
                    <Input 
                    type="time" 
                    name="time" 
                    label="Hora"
                    value={time}
                    onChange={e =>{setTime(e.target.value)}} 
                    />

                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;