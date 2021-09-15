import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import './Head.css'

const Head = ({gradientColor, setGradientColor}) => {



    const HandleClickColor = () => {
        setGradientColor(!gradientColor)
    }

    
    return (
        
<div className='demo-big-content'>
    <Layout style={{height: '30%'}}>
        <Header className={gradientColor ? 'header-color' : 'header-color-dm'} title='My Portfolio' scroll>
            <Navigation>
        <i id={HandleClickColor} className={gradientColor ? 'bi bi-cloud-moon' : 'bi bi-cloud-moon-fill'} onClick={HandleClickColor} aria-hidden='true' style={{fontSize: '30px'}}/>
                <a href="#/">Home</a>
                <a href="#section-project">Projet</a>
                <a href="#about-main">A propos de moi</a>
            </Navigation>
        </Header>
        <Drawer title={<i className='bi bi-controller' aria-hidden='true' style={{fontSize: '50px', }}/>}>
            <Navigation>
                <a href="#/">Home</a>
                <a href="#section-project">Projet</a>
                <a href="#">A propos de moi</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        
    );
}
 
export default Head;