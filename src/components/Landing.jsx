import { Grid, Cell } from "react-mdl";
import Typewriter from 'typewriter-effect';
import profilPic from '../assets/goodp.png'


import './Landing.css'

const Landing = ({ gradientColor }) => {

    const loop = <Typewriter
    options={{
    strings: ['JavaScript', 'React', 'NodeJs'],
    autoStart: true,
    loop: true,
    }}
    />

    return ( 
        <>
            <div className='landing-main'>
               <Grid className={gradientColor ? 'landing-grid' : 'landing-grid-dm'}>
                   <Cell col={12}>
                       <img src={profilPic}
                        alt='avatar'
                        className='avatar-img'
                       />
                       <div className='banner-text'>
                            <h1 className='name'>Tristan Fluteaux</h1>
                            <h1>Développeur web Full Stack <span style={{color: 'yellow'}}>{loop}</span></h1>
   

                            <hr/>
                            <p>HTML / CSS | JavaScript | React | NodeJs | MySql | Express</p>

                            <div className='social-links'>

                                {/* LinkedIn */}
                                <a href='https://www.linkedin.com/in/tristan-fluteaux/' rel='noopener noreferrer' target='_blank'>
                                    <i className='bi bi-linkedin' aria-hidden='true' />
                                </a>
                                {/* Github */}
                                <a href='https://github.com/tristanfluteaux' rel='noopener noreferrer' target='_blank'>
                                    <i className='bi bi-github' aria-hidden='true' />
                                </a>
                            </div>
                       </div>
                   </Cell>
               </Grid>
            </div>
        </>
    );
}
 
export default Landing;