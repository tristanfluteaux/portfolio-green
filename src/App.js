import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Head from "./components/Head";
import Landing from "./components/Landing";
import { useState } from "react";
import './App.css'


function App() {
  const [gradientColor, setGradientColor] = useState(true);


  return (
    <div className="App">
      <Head gradientColor={gradientColor} setGradientColor={setGradientColor} />
      <Landing gradientColor={gradientColor} />
      <Project />
      <AboutMe gradientColor={gradientColor} />
    </div>
  );
}

export default App;
