import React from 'react'
import {MdArrowDropDown, MdCalendarToday} from 'react-icons/md';
import './Filter.css'
function Filter() {

    const filter = [
        {
            id: Math.random(),
            text: 'Направление деятельности',
            icon: <MdArrowDropDown/>
        },
        {
            id: Math.random(),
            text: 'Срок участия',
            icon: <MdArrowDropDown/>
        },
        {
            id: Math.random(),
            text: 'Доп. фильтры',
            icon: <MdArrowDropDown/>
        },
    ]
  return (
    <div className='filter'>
        <div className='filter_calendar'>
            <div className='calendar'>
                <p>Не задано</p>
                <MdCalendarToday/>
            </div>
            <div className='calendar'>
                <p>Не задано</p>
                <MdCalendarToday/>
            </div>
        </div>
        <div className='filter_els'> 
            {filter.map(item => 
                <div key={item.id} className='filter_el'>
                    <p>{item.text}</p>
                    {item.icon}
                </div>
                )}
        </div>
    </div>
  )
}

export default Filter