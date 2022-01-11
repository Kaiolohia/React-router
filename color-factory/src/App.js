import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home"
import Color from "./Color"
import NewColor from "./NewColor";

const App = () => {
  //[{"color": "name", "code": "code"},...] LAYOUT
  const [ colors, setColors ] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="color" element={<Home colors={colors}/>}/>
        <Route path="color/new" element={<NewColor setcolors={setColors}/>}/>
        <Route path="color/:color" element={<Color colors={colors}/>}/>
        <Route path="*" element={<Navigate replace to="color"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
