import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <div className='imageAbout'></div>
        <div className='aboutPokemons'>
        <h2>Мир покемонов</h2>
        <p>Добро пожаловать в мир покемонов!</p>
        <p>На этой странице вы можете найти информацию о разных видах покемонов, их сильных и слабых сторонах.</p>
        <p>И так, чего же ты ждешь? Начните свое путешествие покемонов сегодня!</p>
        <Link to='/mainPage' className='goToPokemon'>Перейти к покемонам</Link>
        </div>
        
        
      </div>
    );
  }
}

export default AboutPage;

