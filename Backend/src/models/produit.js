import mongoose from "mongoose";
import Joi from "joi";

/**
 * Schema du type de donnée à recevoir
 */
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

/**
 * Schema de validation pour le produit
 */
const productValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Le nom est obligatoire",
  }),
  price: Joi.number().min(0).required().messages({
    "number.base": "Le prix doit être un nombre",
    "number.min": "Le prix doit être supérieur ou égal à 0",
  }),
  description: Joi.string().trim(),
  category: Joi.string().trim(),
  stock: Joi.number().min(0).required().messages({
    "number.base": "Le stock doit être un nombre",
    "number.min": "Le stock doit être supérieur ou égal à 0",
  }),
  image: Joi.string().required().messages({
    "string.empty": "L'image est obligatoire",
  }),
});

export { Product, productValidation };
