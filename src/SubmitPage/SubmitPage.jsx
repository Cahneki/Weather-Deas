import React from 'react';
import './SubmitPage.css';
import Navbar from '../NavBar/NavBar';
import { NavLink } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';



function SubmitPage() {
    return(
        <>
        <Navbar />
        
        <FullCalendar
        plugins={[ dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
            left:'prev,next today',
            center:'title',
            right:'dayGridMonth,dayGridWeek,dayGridDay',
                }}
        weekends={false}
        navLinks={true}
        navLinkDayClick={
            <NavLink className="/" to="./HomePage">
          Home
        </NavLink>
        }
        />
        </>
        
    )
    
}











export default SubmitPage;