import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import CheckOut from "./checkout/CheckOut";
import Dashboard from "./Admin/dashboard/Dashboard";
import Signup from "./common/auth/Signup";
import Login from "./common/auth/Login";
import User from "./user/User";
import { useProductProvider } from "./ContextAPI/ProductContext";

function App() {
  const {session} = useProductProvider()
  if(session === true){

  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
        </Routes>
        {/* <Routes>
       
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
