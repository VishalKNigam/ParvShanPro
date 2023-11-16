import { Route, Routes } from "react-router-dom";
import { Admin } from "./Admin";
import { Login } from "./Login";
import { HomePage } from "./HomePage";
import { SingleProduct } from "./SingleProduct";
import  EditProduct  from "./EditProduct";
import { PrivateRoutes } from "../Components/PrivateRoutes";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> (Product List will be displayed
      here)
      <Route
        path="/admin"
        element={
          
            <Admin />
          
        }
      />
      <Route
        path="/view/:id"
        element={
          
            <SingleProduct />
          
        }
      />
      <Route
        path="/edit/:id"
        element={
         
            <EditProduct />
          
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};
