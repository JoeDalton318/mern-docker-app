import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Pas de token, autorisation refusée" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId; // Utilisez le même nom de propriété que dans jwt.sign
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error); // Log l'erreur pour le débogage
    res.status(401).json({ message: "Token invalide" });
  }
};

export default authMiddleware;
