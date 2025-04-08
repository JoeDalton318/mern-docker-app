import ListesProducts from '../Pages/Admin/Products/Listesproducuts';
import AddProducts from '../Pages/Admin/Products/AddProducts';
import EditProduct from '../components/Admin/sidebar/Editproduct';
import { Routes, Route } from 'react-router-dom';

import Details from '../Pages/user/Produits/Details';
import ProductsList from '../Pages/user/Produits/ProductsList';
import ErrorPage from '../Pages/user/404/ErrorPage';
import Panier from '../components/user/panier/Panier';


const Approutes=()=>{
    return (
        <Routes>
            {/* Routes des Users */}
            <Route path="/" element={<ProductsList />} />
            <Route path="/produits" element={<ProductsList />} /> 
            <Route path="/produits/detail/:id" element={<Details />} /> 
            <Route path='/panier' element={<Panier />} />

            <Route path="/*" element={<ErrorPage />} />
            
             <Route path="/Admin" element={<ListesProducts />} />
             <Route path="/Admin/addproduct" element={<AddProducts/>}/>
             <Route path="/Admin/product/edit/:id" element={<EditProduct/>}/>

             {/* <Route path="/Admin/products/" element={<Posts />} /> */}
             {/* <Route path="/posts/product:id" element={<SinglePost />} /> */}


            

        </Routes>
    )

}
export default Approutes;