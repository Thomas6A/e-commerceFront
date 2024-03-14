import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetProductsController from './Controller/Product/GetProductsController';
import GetProductByIdController from './Controller/Product/GetProductByIdController';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<GetProductsController />} />
        <Route path={"/:id_product"} element={<GetProductByIdController />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
