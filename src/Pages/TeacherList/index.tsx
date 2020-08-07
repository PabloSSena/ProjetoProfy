import React from 'react';
import PageHeader from '../../Components/PageHeader'
import TeacherItem from '../../Components/TeacherItem';

import './styles.css';
import Input from '../../Components/Input';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title ="Estes são os proffys disponiveis">
                <form id="search-teachers">
                    
                    <Input name="subject" label="Matéria"/>
                    <Input name="week_day" label="Dia da semana"/>
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