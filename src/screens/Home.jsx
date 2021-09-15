import Project from "../components/Project";

import '../App.css';
import Landing from "../components/Landing";
import Head from "../components/Head";
import AboutMe from "../components/AboutMe";
import { useState } from "react/cjs/react.development";


const Home = () => {

    const [gradientColor, setGradientColor ] = useState(true);

    return (
        <>
        <Head gradientColor={gradientColor} setGradientColor={setGradientColor}/>
        <Landing gradientColor={gradientColor} />
        <Project />
        <AboutMe gradientColor={gradientColor} />
        </>
    );
}
 
export default Home;