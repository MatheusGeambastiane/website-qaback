import axios from "axios";
import { SetStateAction, Dispatch } from "react";
import { Products } from "../context/products";

export const getProducts = async (
  setProducts: Dispatch<SetStateAction<Products[]>>
) => {
  try {
    const res = await axios.get<Products[]>("http://localhost:3300");
    setProducts(res.data);
  } catch (error) {
    console.log(error);
  }
};