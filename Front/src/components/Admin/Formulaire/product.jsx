import { useForm } from "react-hook-form";
import { useState,useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// ✅ Définition du schéma Yup pour la validation
const schema = yup.object({
  name: yup.string().required("Le nom est obligatoire"),
  category: yup.string().required("Le nom est obligatoire"),

  description: yup.string().required("La description est obligatoire"),
  price: yup
    .number()
    .typeError("Le prix doit être un nombre")
    .positive("Le prix doit être positif")
    .required("Le prix est obligatoire"),
  stock: yup
    .number()
    .typeError("La quantité doit être un nombre")
    .integer("La quantité doit être un nombre entier")
    .positive("La quantité doit être positive")
    .required("La quantité est obligatoire"),
//   image: yup.mixed().required("L'image est obligatoire"),
}).required();

const AddProductForm = ({ defaultValues, onSubmit, buttonText }) => {

  const [image, setImage] = useState(null);

  const [base64, setBase64] = useState("");

  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (defaultValues) {
      // Mettre à jour les champs avec les valeurs par défaut
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, defaultValues[key]);
      });

      // Si une image est présente, la mettre à jour dans l'état
      if (defaultValues.image) {
        setBase64(defaultValues.image); // Assurez-vous que defaultValues.image est une URL ou une base64 valide
      }
    }
  }, [defaultValues, setValue]);

  // ✅ Gérer la sélection d'image
  const showImage = async (event) => {
    
    const file = event.target.files[0];
    if (file) {
    
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBase64(reader.result);
        setValue("image", reader.result); 
      };
    }

  };

 

  return (
    <>
      {/* <Entet title="Ajouter un produit" /> */}
      
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row clearfix">
                    {/* ✅ Input pour l'image */}
                    <div className="col-sm-6">
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={showImage}                                                                                                             
                      />
                      {errors.image && <p className="text-danger">{errors.image.message}</p>}
                    </div>
                    {/* ✅ Affichage de l'aperçu */}
                    <div className="col-sm-6 mb-4">
                       {base64 && (
                           <div>
                             <img src={base64} alt="Preview" className="mt-4 w-32 h-32 object-cover" />
                           </div>
                       )}
                    </div>
                  </div>

                  <div className="row clearfix">
                  <div className="col-sm-6">
                      <div className="form-group pb-2">
                        <input
                        {...register("category")}
                          type="text"
                          className="form-control"
                          
                          placeholder="category"
                        />
                        {errors.category && <p className="text-danger">{errors.category.message}</p>}
                      </div>
                    </div>
                    {/* ✅ Nom du produit */}
                    <div className="col-sm-6">
                      <div className="form-group pb-2">
                        <input
                        {...register("name")}
                          type="text"
                          className="form-control"
                          
                          placeholder="Nom du produit"
                        />
                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                      </div>
                    </div>

                    {/* ✅ Description */}
                    <div className="col-sm-12">
                      <div className="form-group pb-2">
                        <textarea
                          rows="4"
                          className="form-control no-resize"
                          {...register("description")}
                          placeholder="Description"
                        />
                        {errors.description && (
                          <p className="text-danger">{errors.description.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row clearfix pb-2">
                    {/* ✅ Prix */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          {...register("price")}
                          placeholder="Prix"
                        />
                        {errors.price && <p className="text-danger">{errors.price.message}</p>}
                      </div>
                    </div>

                    {/* ✅ Stock */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          {...register("stock")}
                          placeholder="Quantité"
                        />
                        {errors.stock && <p className="text-danger">{errors.stock.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* ✅ Bouton de soumission */}
                  <div>
                    <button type="submit" className="btn btn-primary">
                    {buttonText}
                    </button>
                  </div>
                </form>
          
    </>
  );
};

export default AddProductForm;
