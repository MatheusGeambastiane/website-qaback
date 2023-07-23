import { Login } from "../../components/login";
import { Container } from "./styles";
import Image from '../../../public/loginBanner.png';

export const Home = () => {
  return (
    <Container>
        <img src={Image} alt="LoginImage"/>
      <Login />
    </Container>
  );
};
