import { NavLink } from "react-router-dom"
import { useState,useEffect } from "react";
import AdminApi from '../../../services/AdminApi'
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const [product, setProductId] = useState({});
    const { id } = useParams();
    useEffect(() => {
        AdminApi.getProductById(id).then((data) => setProductId(data));
        console.log(product);
    }, [id]);
  return ( 
    <section className="content pt-5 ">
        <div className="body_scroll container-fluid">
            <div className="row clearfix">
                <div className="col-12">
                    <div className="card row">
                        <div className="col-xl-3 col-lg-4 col-md-12">
                            <div className="preview preview-pic tab-content">
                                <div className="tab-pane active" id="product_1"><img src={product.image} className="img-fluid" alt="" /></div>
                            </div>              
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="product details">
                                <h3 className="product-title mb-0">{product.name}</h3>
                                <h5 className="price mt-0">Current Price: <span className="col-amber">{product.price}</span></h5>
                                <p className="product-description"> {product.price}</p>
                                {/* <p className="vote"><strong>78%</strong> of buyers enjoyed this product! <strong>(23 votes)</strong></p> */}
                                
                                
                                <div className="action">
                                    <NavLink className="btn btn-primary waves-effect" type="button" to="/panier">ADD TO CART</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails