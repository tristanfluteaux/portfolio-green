import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Head from "./components/Head";
import Landing from "./components/Landing";
import { useEffect, useState } from "react";


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
