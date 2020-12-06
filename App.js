import React from 'react';
import './App.css';

import './App.css';
import { Link } from 'react-router-dom';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function App() {
  return (
    <div className="main-background">
      {/*Buttons on top left hand side*/}
      <div className="button-group">
          <a className="buttons-images" href="https://www.linkedin.com/in/tristan-lucero-9120881b1/">
            <i class="material-icons md-dark">description</i>
            <p className="topbutton-text">LinkedIn</p>
          </a>
          <a className="buttons-images" href="https://github.com/TristanLucero">
            <i class="material-icons md-dark">build_circle</i>
            <p className="topbutton-text">Github</p>
          </a>
      </div>
      <p>
          <p className="big-text">
            <p className="hello-text">Hello! ツ</p>
            <p className="paragraph-text">I'm Tristan Lucero, a Computer Science<br/> undergraduate student who is highly<br/> interested in software engineering.</p>
            <br/>
            <br/>
            <p className="contact-info">Contact info: 979-250-2645 | tristanandrewlucero@gmail.com</p>
          </p>
      </p>
      <div className='experience-panel'>
        <p style={{ fontSize: "25px", fontWeight: "bold" }}>Projects:</p>
        <p className='projects-text'>⚫ Portfolio Website: A simple portfolio website, made with React JS and CSS.
        
        <br/>
        <br/> 
            Github  
            <a href="https://github.com/TristanLucero/portfolio-website">
            <img border="0" alt="github project 1" src="https://www.freepngimg.com/thumb/github/62620-github-network-icons-computer-graphics-logo-portable.png" width="30" height="30" />
            </a>
            <img className='project1-img' src="https://i.imgur.com/v0Yy8LF.png"></img>
        </p>
      </div>
      <p className="footer-text">Tristan Lucero's Portfolio Website - Built with React</p>
    </div>
  );
}

export default App;
