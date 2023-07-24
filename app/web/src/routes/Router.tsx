import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Login';
import { Register } from '../pages/Register';
import { Products } from '../pages/products';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}