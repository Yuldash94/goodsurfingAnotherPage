import React from 'react';
import {ImInstagram, ImTelegram,ImVk,ImFacebook2} from 'react-icons/im'
import {MdArrowDropDown} from 'react-icons/md'
import './Footer.css'
function Footer() {

    const community = [
        'Блог',
        'Видео',
        'Эксперты',
        'Амбассадоры',
        'Курсы',
        'Клубы',
        'Журнал',
    ]
    const aboutProject = [
        'О НКО', 
        'Наша команда',
        'Как это работает',
        'Правила',
        'Политика конфиденциальности',
        'Новости',
    ]
    const forOrganizer = [
        'Стать хостом', 
        'Как это работает', 
        'Правила', 
        'Курсы для организаторов',
    ]

  return (
    <div className='footer'>
        <div className='footer_inner'>
            <div className='footer_logo'>
                <div className='logo_footer'>
                <img src='./img/logo-white.png' alt='logo'></img>
                    <h3>RU</h3>
                    <MdArrowDropDown /> 
                </div>
                <div className='social_links'>
                    <ImInstagram style={{cursor: 'pointer'}}/>
                    <ImTelegram style={{cursor: 'pointer'}}/>
                    <ImVk style={{cursor: 'pointer'}}/>
                    <ImFacebook2 style={{cursor: 'pointer'}}/>
                </div>
                <a href='mailto:support@goodsurfing.org'>Напишите нам</a>
            </div>
            <div className='footer_info'>   
                <ul>
                    <p>Сообщество</p>
                    {community.map((item, index) =>
                        <li key={index}><a href=' #' >{item}</a></li>
                    )}
                </ul>
                <ul>
                    <p>О проекте</p>
                    {aboutProject.map((item, index) =>
                        <li key={index}><a href=' #' >{item}</a></li>
                    )}
                </ul>
                <ul>
                    <p>Для организаторов</p>
                    {forOrganizer.map((item, index) =>
                        <li key={index}><a href=' #' >{item}</a></li>
                    )}
                </ul>
            </div>
        </div>
        <div className='footer_copy'> 
            <p>&copy; GoodSurfing, 2017-2021</p>
        </div>
    </div>
  )
}

export default Footer