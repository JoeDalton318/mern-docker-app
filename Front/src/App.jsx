// import { useState } from 'react'
import Sidebar from './components/Admin/sidebar/sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../public/assets/css/style.min.css'
import NavBar from './components/user/navBar/NavBar';
import { useLocation } from "react-router-dom";
import Approutes from "../src/routes/Approutes";

// import ProductDetails from './components/user/productDetails/ProductDetails';

// import Products from './components/user/products/products';

function App() {
  const location = useLocation(); 
  const adminRoutes = ["/Admin", "/Admin/addproduct", "/Admin/addproduct/:id"];
  const showSidebar = adminRoutes.some((path) => location.pathname.startsWith(path));
  return (
    <>
    
        <NavBar/>
        {/* {showSidebar && <Sidebar /> } */}
        <section className="content" style={{'margin-top':"60px", 'margin-left':'30px'}}>   
          <Approutes /> 
        </section>
    </>
  )
}

export default App