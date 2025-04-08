import Entet from '../sidebar/breadcumb';
import AdminApi from '../../../services/AdminApi'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";


const AllProducts = () => {
  const navigate = useNavigate();

    const [products, setproducts] = useState([]);
    useEffect(()=>{
        AdminApi.getProducts().then((data)=>{
            setproducts(data)
        })
    })

    console.log(products);
    

    const deleteproduct = (product) => {
        AdminApi.deleteProduct(product).then((data)=>{
            navigate('/Admin')
        })

    }

    return (
        <div>
            <Entet title="Produits" page="AllProducts"/>
            <div className="container-fluid">
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card">
                        
                        <div className="table-responsive">
                            <table className="table table-hover product_item_list c_table theme-color mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th> 
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                        {/* <th data-breakpoints="xs md">Stock</th> */}
                                        <th >Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product,index=1) => (
                                            <tr key={index++}>
                                              <td>{product._id}</td>
                                              <td><img src={product.image} width="48" alt="Product img"></img></td>
                                              <td><h5>{product.name}</h5></td>
                                              <td>{product.price} €</td>
                                              <td>{product.stock}</td>
                                                
                                        <td>
                                        <Link to={`/Admin/product/edit/${product._id}`} key={product._id}>
                                             <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green">Modifier</a>

                                        </Link>
                                        <button className="btn btn-default waves-effect waves-float btn-sm waves-red" onClick={() => deleteproduct(product._id)}>
                                            Supprimer 
                                        </button>
                                            
                                            {/* <a href="javascript:void(0);"   className="btn btn-default waves-effect waves-float btn-sm waves-red">Supprimer</a> */}
                                        </td>

                                            </tr>
                                          ))
                                    }
                                    
                                           
                                </tbody>
                            </table>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>

            
        </div>
    )
}
export default AllProducts;