import React from 'react';
import PageHeader from '../../Components/PageHeader'
import TeacherItem from '../../Components/TeacherItem';

import './styles.css';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title ="Estes são os proffys disponiveis">
                <form id="search-teachers">
                    
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
                    <Input type="time" name="time" label="Hora"/>

                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;