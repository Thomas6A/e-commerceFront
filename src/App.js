import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetProducts from './Vue/Pages/GetProducts';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetProducts />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
