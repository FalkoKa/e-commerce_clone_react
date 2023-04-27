import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './pages/Category';
import Product from './pages/Product';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ShoppingCart from './pages/Shopping_cart';
import SearchResults from './pages/Search_results';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/Checkout_success';
import OrderConfirm from './pages/Order_confirmation';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import About from './pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/confirm" element={<OrderConfirm />} />
          <Route path="/order/:id" element={<CheckoutSuccess />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
