// productController.js
import { Product, productValidation } from "../models/produit.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const searchQuery = req.query.q || "";
    let filter = {};
    if (searchQuery) {
      filter = {
        $or: [
          // $or permet de rechercher dans plusieurs champs
          { name: { $regex: searchQuery, $options: "i" } },
          { description: { $regex: searchQuery, $options: "i" } },
          { category: { $regex: searchQuery, $options: "i" } },
        ],
      };
    }
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des produits" });
  }
};

export const getProductByID = async (req, res) => {
  try {
    const productID = req.params.id.trim().replace(/^:/, ""); // Nettoyage de l'ID
    if (!mongoose.Types.ObjectId.isValid(productID)) {
      return res.status(400).json({ message: "ID de produit invalide" });
    }
    const product = await Product.findById(productID);

    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

export const newProduct = async (req, res) => {
  try {
    const { error, value } = productValidation.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Une erreur est survenue lors de la sauvegarde" });
  }
};

export const delProduct = async (req, res) => {
  try {
    const productID = req.params.id.trim().replace(/^:/, ""); // Nettoyage de l'ID
    if (!mongoose.Types.ObjectId.isValid(productID)) {
      return res.status(400).json({ message: "ID de produit invalide" });
    }
    const deletedProduct = await Product.findByIdAndDelete(productID);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(204).end(); // Pas de contenu à renvoyer, code 204 No Content
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la suppression",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { error, value } = productValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const productId = req.params.id.replace(":", ""); // Nettoyage de l'ID
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "ID de produit invalide" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body, // Utiliser directement req.body pour la mise à jour
      { new: true, runValidators: true } // runValidators pour valider les champs
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la mise à jour",
    });
  }
};
