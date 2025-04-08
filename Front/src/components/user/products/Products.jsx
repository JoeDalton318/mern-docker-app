import { NavLink } from "react-router-dom"
import { useState,useEffect } from "react";
import AdminApi from '../../../services/AdminApi'

const  Products = () => {
const [products, setproducts] = useState([]);
useEffect(()=>{
    AdminApi.getProducts().then((data)=>{
        setproducts(data)
    })
})

  return(
    <section className=" container-fluid row my-5 ">
        
            {
                
                products.map((product) =>(
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 my-5">
                        <div className="card">
                        <div className="body product_item">
                            {/* <span className="label onsale">Sale!</span> */}
                            <img src={product.image} alt="Product" className="img-fluid cp_img" />
                            <div className="product_details">
                                <a href="ec-product-detail.html">{product.name}</a>
                                <ul className="product_price list-unstyled">
                                
                                    <li className="new_price">{product.price}</li>
                                </ul>                                
                            </div>
                            <div className="action">
                                <NavLink  className="btn btn-info waves-effect" to={`/produits/detail/${product._id}`} ><i className="zmdi zmdi-eye"></i></NavLink>
                                <NavLink className="btn btn-primary waves-effect" to="/panier">ADD TO CART</NavLink>
                            </div>
                        </div>
                        </div> 
                    </div>

                ))
            }
                           
        
    </section>
  )
}

export default Products