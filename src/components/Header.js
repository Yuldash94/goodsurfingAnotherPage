import React from 'react';
import {MdArrowDropDown, MdSearch} from 'react-icons/md';
import './Header.css';

function Header() {

  const inner = [
    {
      id: Math.random(),
      text: 'Все предложения',
      icon: <MdSearch/>,
      background: true
    },
    {
      id: Math.random(),
      text: 'Сообщество',
      icon: <MdArrowDropDown/>,
      background: false
    },
    {
      id: Math.random(),
      text: 'О проекте',
      icon: <MdArrowDropDown/>,
      background: false
    },
  ]

  return (
    <div className='header'>
        <div className='logo'>
            <img src='./img/logo-1.png' alt='logo'></img>
            <img src='./img/logo.png' alt='logo'></img>
            <h3>RU</h3>
            <MdArrowDropDown/> 
        </div>
        <div className='header_inner'>
            {inner.map(item =>
              <div key={item.id} className={item.background ? 'inner_el_bg inner_el' : 'inner_el'}>
                <p>{item.text}</p>
                {item.icon}
              </div>
              )}
        </div>
        <div className='header_login'>
              <div className='login'>Вход</div>
              <div className='registry'>Регистрация</div>
        </div>
    </div>
  )
}

export default Header