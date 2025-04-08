import mongoose from "mongoose";
import Joi from "joi";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

const userValidationSchema = Joi.object({
  // Renommer pour éviter la confusion
  username: Joi.string().required().trim().messages({
    "string.empty": "Le nom d'utilisateur est obligatoire",
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": "Le mot de passe est obligatoire",
    "string.min": "Le mot de passe doit contenir au moins 6 caractères",
  }),
  email: Joi.string().email().required().trim().messages({
    "string.empty": "L'email est obligatoire",
    "string.email": "L'email n'est pas valide",
  }),
});

const userValidation = (data) => {
  // Créer la fonction de validation
  return userValidationSchema.validate(data);
};

export { User, userValidation };
