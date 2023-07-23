import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  align-content: center;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};

  @media screen and (max-width: 1600px) {
  img {
    width: 50%;
  }
}

@media screen and (max-width: 2600px) {
  img {
    max-width: 50%;
  }
}

  @media screen and (max-width: 992px) {
  img {
    width: 70%;
  }
}

`;
