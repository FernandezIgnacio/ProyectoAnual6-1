import logo from './logo.svg';
import './App.css';
import { BrowserTouter, Routes ,Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes><Route exacr path='/' element={<Login/>}/></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
