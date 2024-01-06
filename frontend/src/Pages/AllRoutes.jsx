import { Route, Routes } from "react-router-dom";
import { Admin } from "./Admin";
import { Login } from "./Login";
import { HomePage } from "./HomePage";
import { SingleProduct } from "./SingleProduct";
import EditProduct from "./EditProduct";
import { PrivateRoutes } from "../Components/PrivateRoutes";
import About from "./About";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} index/> 
      <Route
        path="/admin"
        element={
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        }
      />
      <Route
        path="/view/:id"
        element={
          
            <SingleProduct />
          
        }
      />
      <Route
        path="/about"
        element={
          
            <About />
          
        }
      />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoutes>
            <EditProduct />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};
