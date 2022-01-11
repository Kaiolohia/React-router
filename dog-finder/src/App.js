import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogList from "./DogList"
import DogDetails from "./DogDetails";
import duke from "./img/duke.jpg"
import perry from "./img/perry.jpg"
import tubby from "./img/tubby.jpg"
import whiskey from "./img/whiskey.jpg"

function App(props) {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="dogs" element={<DogList dogs={props.dogs}/>}/>            
          <Route path="dogs/:name" element={<DogDetails dogs={props.dogs}/>}/>
        </Routes>
      </BrowserRouter>
  );  
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
