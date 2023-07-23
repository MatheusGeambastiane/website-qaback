import { styled } from "styled-components";

export const ContainerRegister = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;
export const ImageRegister = styled.div`
padding: 0rem 2rem;
  h1 {
    margin-right: 15rem;
    margin-top: 9rem;
    max-width: 25rem;
    font-size: 4rem;
  }
  width: 46.5rem;
  @media screen and (max-width: 1550px) {
    max-width: 40rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
 
  background-color: ${(props) => props.theme.yellow};
  img {
    margin-top: 2rem;
    position: absolute;
    margin-left: 25rem;
    width: 37%;
  }
  @media screen and (max-width: 1550px) {
    img {
      width: 40%;
    }
  }
`;
