import express from "express";
import {
  delProduct,
  getProductByID,
  getProducts,
  updateProduct,
  newProduct,
} from "../controllers/ProduitController.js";
import { date } from "../middleware/middleware.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductByID);
router.post("/products", newProduct);
router.delete("/products/:id", delProduct);
router.put("/products/:id", updateProduct);

export default router;
