import AddProductForm from '../Formulaire/product';
import Entet from './breadcumb';
import AdminApi from '../../../services/AdminApi'
import { useNavigate } from "react-router-dom";



 // ✅ Gestion de la soumission du formulaire
const AddProduct = () => {
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
        console.log(data.image)
      await AdminApi.addproduct(data);
      navigate("/Admin");
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit", error);
    }
  };
  
  return (
    <div>
      <Entet title='Nouveau Produit' page="NewProducts"/>
     <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="body">
                <h2 className="card-inside-title">Formulaire d'ajout de produit</h2>
                <AddProductForm
                  defaultValues={{ name: "", price: "",category: "",stock:"",image: "",description: "",}}
                  onSubmit={onSubmit}
                  buttonText="Ajouter"
                />
              </div>
              </div>
            </div>
            </div>
            </div>
    </div>
  );
};

export default AddProduct;
