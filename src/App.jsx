import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import Orders from "./pages/Orders";
import PageSettings from "./pages/PageSettings";
import Products from "./pages/Products";
import Users from "./pages/Users";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Users />} />
          <Route path="login" element={<Login />} />

          <Route path="settings" element={<Settings />} />
          <Route path="stats" element={<Blank />} />
          <Route path="homepage" element={<PageSettings />} />
          <Route path="productdetails" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
