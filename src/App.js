import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetProductsController from './Controller/Product/GetProductsController';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetProductsController />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
