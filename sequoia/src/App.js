import { useEffect } from "react";
import Header from "./components/Header/Header";
import Welcome from "./screens/Welcome/Welcome";

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

    </div>
  );
}

export default App;
