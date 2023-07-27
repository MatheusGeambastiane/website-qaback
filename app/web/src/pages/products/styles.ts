import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const ContainerHeaderProducts = styled.header`
  height: 10rem;
  display: flex;
  justify-content: center;
  gap: 20%;
  align-items: center;
  flex-direction: row;
`;

export const ProductsContainer = styled.section`
  width: 100%;
  display: flex;
  .first {
    display: flex;
    align-items: center;
    padding-bottom: 1.6rem;
    padding-top: 2.1rem;
  }
  nav {
    width: 15rem;
    height: calc(100vh - 10rem);
    background-color: ${(props) => props.theme.yellow};
    ul {
      li {
        padding: 1rem;
        font-size: 1rem;
        border-bottom: 1px solid black;
      }
    }
  }
  section {
    background-color: red;
    width: 100%;
    height: 5rem;
    background-color: ${(props) => props.theme.yellow};
    padding: 1rem 2rem;
    width: 100%;
    header {
      ul {
        padding: 1rem 3rem;
        list-style: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
`;
export const ProductsList = styled.div`
  margin-top: 2rem;
  padding: 1rem 2rem;
  height: calc(100vh - 17rem);
  overflow-y: scroll;
  header {
    display: flex;
    justify-content: space-between;
    button {
      cursor: pointer;
      border-radius: 82px;
      background-color: ${(props) => props.theme.yellow};
      font-size: 0.85rem;
      width: 10rem;
      height: 3rem;
      border: none;
    }
    input {
      padding: 1rem;
      border: 1px solid black;
      width: 25rem;
      border-radius: 85px;
    }
  }
`;


export const Cards = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #D9D9D9;
  border-radius: 16px;
  img {
    padding: 1rem;
    max-width: 220px;
  }
`;

export const DetailsCard = styled.div`
  div {
    padding: 1rem 1rem;
    h2 {
      max-width: 15rem;
      font-family: "Josefin Sans", sans-serif;
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0;
      color: #607196;
      text-transform: lowercase;
      padding: 0;
    }
    display: flex;
    align-items: center;
    flex-direction: column;

    div {
      span {
        font-size: 0.85rem;
        font-family: "Josefin Sans", sans-serif;
        margin-top: 0.1rem;
        font-weight: 400;
      }
      display: flex;
      flex-direction: column;
    }
  }
  button:hover {
    cursor: pointer;
    color: #25283d;
  }
`;
export const CardContainer = styled.div`
  margin-top: 2rem;
  font-size: 0.7rem;
  margin-left: 3rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5rem;
`;

export const Overlay = styled(Dialog.Overlay)`
  width: 100%;
  top: 0px;
  left: 0px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0009;
  position: absolute;
`;

export const Content = styled(Dialog.Content)`
  width: 30%;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 14px;
  
`;

export const FormContainer = styled.form`
  padding: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    width: 100%;
  }
  input {
    width: 100%;
    padding: 1rem;
    border-radius: 14px;
    border: 1px solid #000;
    background: #fff;
  }
  button {
    margin-top: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 61px;
    font-size: 1rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.black};
    padding: 1rem 2rem;
    width: 50%;
  }
  label {
    font-weight: 600;
  }
`;
export const Group = styled.section`
  display: flex;
  width: 100%;
  background-color: red;
  flex-direction: row;
  gap: 1rem;
`;
