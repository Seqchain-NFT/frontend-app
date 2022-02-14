import { useEffect } from "react";
import Header from "./components/Header/Header";
import Welcome from "./screens/Welcome/Welcome";
import About from "./screens/About/About";


import renderer from './utils/renderer'


const App = () => {

  useEffect(() => {
    renderer.render()
    renderer.useMouseEvent()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <About/>
    </div>
  );
}

export default App;
