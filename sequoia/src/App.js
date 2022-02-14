import { useEffect } from "react";

import Header from "./components/Header/Header";
import Welcome from "./screens/Welcome/Welcome";
import About from "./screens/About/About";
import Join from "./screens/Join/Join";


import renderer from './utils/renderer'


const App = () => {

  useEffect(() => {
    renderer.render()
    renderer.useMouseEvent()
  }, [])

  return (
    <div style={{overflow: 'hidden'}} className="App">
      <Header/>
      <Welcome/>
      <About/>
      <Join/>
    </div>
  );
}

export default App;
