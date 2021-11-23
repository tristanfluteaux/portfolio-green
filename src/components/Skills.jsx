import { ProgressBar } from "react-mdl";
import html from '../assets/html-logo.png';
import css from '../assets/css-logo.png'
import javascript from '../assets/javascript-logo.png'
import react from '../assets/react-logo.png'
import node from '../assets/node-logo.png'
import mysql from '../assets/mysql-logo.png'
import express from '../assets/express.png'
import git from '../assets/git-logo.png'
import figma from '../assets/figma2.png'
import trello from '../assets/trello.png'
import next from '../assets/next-logo.png'
import tailwind from '../assets/tailwind.png'


import './AboutMe.css';

const Skills = (props) => {
    return ( 
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
    
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>HTML</h2>
                        <img src={html} alt='html logo' style={{width: '100px'}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>CSS</h2>
                        <img src={css} alt='css logo' style={{width: '72px'}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>JavaScript</h2>
                        <img src={javascript} alt='javascript logo' style={{width: '82px',}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px', textAlign: 'center'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>React</h2>
                        <img src={react} alt='react logo' style={{width: '117px',}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>Next</h2>
                        <img src={next} alt='react logo' style={{width: '85px',}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>NodeJs</h2>
                        <img src={node} alt='node logo' style={{width: '130px', color: 'white'}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px', textAlign: 'center'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>MySql</h2>
                        <img src={mysql} alt='mysql logo' style={{width: '144px',}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px', textAlign: 'center'}}>
                        <h2>Express</h2>
                        <img src={express} alt='express logo' style={{width: '75px'}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px', textAlign: 'center'}}>
                        <h2>Tailwind</h2>
                        <img src={tailwind} alt='express logo' style={{width: '75px'}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px', textAlign: 'center'}}>
                        <h2>Git</h2>
                        <img src={git} alt='git logo' style={{width: '75px'}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px', textAlign: 'center'}}>
                        <h2>Figma</h2>
                        <img src={figma} alt='figma logo' style={{width: '75px'}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px', textAlign: 'center'}}>
                        <h2>Scrum</h2>
                        <img src={trello} alt='trello logo' style={{width: '75px'}} />
                        <ProgressBar  style={{width: '100%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                
        </div>
    );
}
 
export default Skills;