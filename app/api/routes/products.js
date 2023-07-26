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

router.get("/", getProducts);
router.post("/login", Login);
router.post("/register", Register);

router.post("/", upload.single("image"), addProducts);
router.delete("/:id", deleteProducts);

export default router;
