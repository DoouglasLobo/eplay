import { Routes, Route } from 'react-router-dom'

import Home from './page/Home'
import Categories from './page/Categories'
import Product from './page/Product'
import Checkout from './page/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/produto/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
