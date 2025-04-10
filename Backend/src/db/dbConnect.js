import mongoose from "mongoose";

/**
 * Fonction permettant la connection à notre base de donnée
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Problème lors de la connection ", error);
    process.exit(1);
  }
};

export default connectDB;
