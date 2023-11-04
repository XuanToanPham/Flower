import logo from "./logo.svg";
import "./App.css";
import FlowerComponent from "./components/FlowerComponent";
import ContentForTini from "./components/ContentForTini";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<ContentForTini />}/>
        <Route path="/flower" exact  element={<FlowerComponent />}  />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
