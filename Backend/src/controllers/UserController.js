import { User, userValidation } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { error } = userValidation(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Cet email est déjà utilisé." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();

    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res
      .status(201)
      .json({
        user: {
          id: savedUser._id,
          username: savedUser.username,
          email: savedUser.email,
        },
        token,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de l'inscription de l'utilisateur.",
        error: error.message,
      });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect." });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect." });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la connexion.", error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération de l'utilisateur.",
        error: error.message,
      });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération des utilisateurs.",
        error: error.message,
      });
  }
};

export { registerUser, loginUser, getUser, getAllUsers };
