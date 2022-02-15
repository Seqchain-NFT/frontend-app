import { useEffect } from "react";

import Main from "./pages/Main/Main";

import renderer from './utils/renderer'


const App = () => {
  useEffect(() => {
    renderer.render()
    renderer.useMouseEvent()
  }, [])

  return (
    <div style={{overflow: 'hidden'}} className="App">
      <Main/>
    </div>
  );
}

export default App;
