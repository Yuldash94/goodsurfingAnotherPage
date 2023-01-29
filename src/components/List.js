import React from 'react'
import './List.css'
import ListItem from './ListItem'
import {MdArrowDropDown} from 'react-icons/md'

function List({list}) {


  return (
    <div className='list_inner'>
      <div className='list_header'>
        <p>{list.length} Вариантов</p>
        <p>Показать прошедшие</p>
        <div className='list_header_el'>
            <p>Сначала новые</p>
            <MdArrowDropDown/>
        </div>
      </div>
      <div className='list'>
          {list.map(item => <ListItem key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default List