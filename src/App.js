import React from 'react'
import './App.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import Maps from './components/Maps';

function App() {
  const list = [
    {
      id: Math.random(),
      title: 'Работа в заповеднике Лен. область',
      work: 'Заповедники и нац. парки',
      adress: 'Санкт-Петербург, Россия',
      star: 4.6,
      favorites: 15,
      review: 19,
      went: 20,
      img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
      point: [35.55, 55.55],
      pointColor: 'green',
      text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [45.55, 55.55],
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [55.55, 55.55],
        pointColor: 'red',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [65.55, 55.55],
        pointColor: 'black',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [65.55, 55.55],
        pointColor: 'blue',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [65.55, 15.55],
        pointColor: 'gray',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [39.55, 55.55],
        pointColor: 'violet',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 35.55],
        pointColor: 'red',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [25.55, 55.55],
        pointColor: 'white',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [15.55, 55.55],
        pointColor: 'red',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 65.55],
        pointColor: 'blue',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.95, 55.55],
        pointColor: 'black',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 59.55],
        pointColor: 'silver',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'yellow',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'green',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'orange',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'white',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'blue',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'blue',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'blue',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'blue',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'blue',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'blue',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    },
    {
        id: Math.random(),
        title: 'Работа в заповеднике Лен. область',
        work: 'Заповедники и нац. парки',
        adress: 'Санкт-Петербург, Россия',
        star: 4.6,
        favorites: 15,
        review: 19,
        went: 20,
        img: 'https://kazanfirst.ru/storage/posts/October2021/Y6u3FLW3lXJdWRuzE1U7-1060x600-watermark.jpg',
        point: [75.55, 55.55],
        pointColor: 'blue',
        text: 'Стратегический план 1942 состоял в том, чтобы «последовательно осуществить ряд стратегических...'
    }
]
  function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
  return (
    <div className="App">
    <Header/>
    <Filter/> 
    <main>
      <List list={list}/>
      <Maps list={list}/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
