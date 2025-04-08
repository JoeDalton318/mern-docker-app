import AddProductForm from '../Formulaire/product';
import AdminApi from '../../../services/AdminApi'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Entet from '../sidebar/breadcumb';
import { useNavigate } from "react-router-dom";


const EditProduct=()=>{
    const navigate = useNavigate();
    const [product, setProductId] = useState({});
    const { id } = useParams();
    useEffect(() => {
        AdminApi.getProductById(id).then((data) => setProductId(data));
        console.log(product);
    }, [id]);
    const onUpdate = async (data) => {
           
        try {
            const id=data._id
            delete data._id;
            delete data.createdAt;
            delete data.__v;


          await AdminApi.updateProduct(id,data);
          navigate("/Admin"); // Redirection après modification
        } catch (error) {
          console.log("Erreur lors de la modification du produit", error);
        }
      };
      
    
    
    
      return (
        <div>
     <Entet title='Modification du Produit' page='Edit Product'/>
     <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="body">
                <h2 className="card-inside-title">Formulaire d'ajout de produit</h2>

                 
                    <AddProductForm
                      defaultValues={product}
                      onSubmit={onUpdate}
                      buttonText="Modifier"
                    />
                  </div>
                
            </div>
            </div>
            </div>
            </div>
            </div>
            );

}




export default EditProduct;
