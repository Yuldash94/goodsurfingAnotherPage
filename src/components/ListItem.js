import React from 'react'
import {AiFillHeart, AiFillStar} from 'react-icons/ai'
import './ListItem.css'

function ListItem({item}) {
  return (
    <div className='list_item'>
        <div className='item_img' style={{backgroundImage: `url(${item.img})`}}>
            <AiFillHeart style={{cursor: 'pointer'}}/>
        </div>
        <div className='item_inner'>
            <h3>{item.title}</h3>
            <div className='inner_work'>
                <p>{item.adress}</p>
                <p>{item.work}</p>
            </div>
            <div className='inner_review'>
                <div className='star'>
                    <AiFillStar style={{cursor: 'pointer'}}/> 
                    <p>{item.star}</p>
                </div>
                <div className='favorites'>
                    <AiFillHeart style={{cursor: 'pointer'}}/> 
                    <p>{item.favorites}</p>
                </div>
                <p>Отзывов: {item.review}</p>
                <p>Отправились: {item.went}</p>
            </div>
            <p className='review_text'>{item.text}</p>

        </div>
    </div>
  )
}

export default ListItem