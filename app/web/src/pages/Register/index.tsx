import { RegisterForm } from "../../components/register";
import { ContainerRegister, ImageRegister } from "./styles";

export const Register = () => {
  return (
    <ContainerRegister>
      <ImageRegister>
        <h1>Cadastre um produto</h1>
        <img src="../../../public/products.png" alt="" />
      </ImageRegister>
      <RegisterForm />
    </ContainerRegister>
  );
};
