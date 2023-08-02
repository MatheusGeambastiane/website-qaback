import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  getProducts,
  addProducts,
  Login,
  Register,
  deleteProducts,
} from "../controllers/produtos.js";
import jwt from 'jsonwebtoken';
import {secretKey} from '../tokens/secret-token.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const fileExt = file.originalname.split(".").pop();
    cb(null, `${uniqueSuffix}.${fileExt}`);
  },
});

const upload = multer({
  storage: storage,
  dest: path.join(__dirname, "..", "uploads"),
});

const router = express.Router();

const validJwt = (req, res, next) => {
  const authToken = req.headers.authorization
  if(!authToken) {
    res.send(403)
    return
  }

  const jwtPayload = jwt.verify(authToken, secretKey)
  if(!jwtPayload) {
    res.send(403)
    return
  }

  req.body.userEmail = jwtPayload.email

  next()
}

router.get("/", validJwt, getProducts);
router.post("/login", Login);
router.post("/register", Register);

router.post("/", upload.single("image"), validJwt, addProducts);
router.delete("/:id", deleteProducts);

export default router;
