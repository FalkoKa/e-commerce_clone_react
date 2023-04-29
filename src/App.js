import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './pages/Category';
import ProductDetails from './pages/Product_details/Product_details';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ShoppingCart from './pages/Shopping_cart/Shopping_cart';
import SearchResults from './pages/Search_results';
import CheckoutSuccess from './pages/Checkout/Checkout_success';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Checkout from './pages/Checkout/Checkout';
import Protected from './utils/protectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route
            path="/checkout"
            element={
              <Protected>
                <Checkout />
              </Protected>
            }
          />
          <Route path="/order/:id" element={<CheckoutSuccess />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
