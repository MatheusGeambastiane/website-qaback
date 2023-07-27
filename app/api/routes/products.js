import express from "express";
import {
  getProducts,
  addProducts,
  Login,
  Register,
  deleteProducts
} from "../controllers/produtos.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/login", Login)
router.post("/register", Register)
router.post("/", addProducts);
router.delete("/:id", deleteProducts);

export default router;
