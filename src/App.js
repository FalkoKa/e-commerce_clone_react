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
import Profile from './pages/Profile/Profile';
import AdminDashboard from './pages/Admin_dashboard';
import Puma from './pages/Puma/Puma';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/puma" element={<Puma />} />
          <Route path="/nike" element={<Home />} />
          <Route path="/mango" element={<Home />} />
          <Route path="/bershka" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route
            path="/myaccount"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/checkout"
            element={
              <Protected>
                <Checkout />
              </Protected>
            }
          />
          <Route
            path="/confirm"
            element={
              <Protected>
                <CheckoutSuccess />
              </Protected>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
