import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";

export const ContainerHeaderProducts = styled.header`
`;

export const ProductsContainer = styled.section`
  display: flex;
  background-color: red;
  h2 {
    text-align: justify;
    padding: 1rem;
    border: none;
    font-size: 15px;
    width: 100%;
    font-weight: 600;
  }
  .first {
    display: flex;
    align-items: center;
    padding-bottom: 1.6rem;
    padding-top: 2.1rem;
  }
  nav {
    width: 15%;
    height: calc(100vh - 10rem);
    background-color: ${(props) => props.theme.yellow};
    ul {
      li {
        padding: 1rem;
        font-size: 12px;
      }
    }
  }
`;
export const ProductsList = styled.div`
  padding: 0rem 1rem;
  width: 100%;
  height: calc(100vh - 17rem);
  header {
    margin: 0rem 3rem;
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
  height: 16rem;
  width: 100%;
  background-color: #d9d9d9;
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
  font-size: 1rem;
  margin-left: 3rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5rem;
  height: calc(100vh - 17rem);
  overflow-y: scroll;
  width: calc(100% - 5%);
`;

export const Overlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0009;
`;
export const Content = styled(Dialog.Content)`
  width: 35rem;
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
  .none {
    display: none;
  }
  .toast {
    color: red;
    width: 15rem;
  }
  .Toastify__progress-bar-theme--light {
    background: ${(props) => props.theme.yellow};
  }
  .Toastify__close-button {
    display: none;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "Selecionar imagem";
    display: inline-block;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 0.5rem;
    outline: none;
    white-space: nowrap;
    color: black;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 400;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active::before {
    background: ${(props) => props.theme.black};
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
  flex-direction: row;
  gap: 1rem;
`;

export const FilterComponent = styled(Accordion.Item)<{ isSelected: boolean }>`
  li {
    &:hover {
      font-weight: 500;
      cursor: pointer;
    }
  }
  .contentList {
    padding: 0.5rem;
    border: none;
    list-style: none;
    margin-left: 1rem;
  }
  h2 {
    cursor: pointer;
    text-align: justify;
    padding: 1rem;
    border: none;
    font-size: 15px;
    width: 100%;
    font-weight: 600;
  }
`;

export const ContentList = styled(Accordion.Content)``;
export const OpenFilters = styled(Accordion.Trigger)`
  width: 100%;
  h2 {
    text-align: justify;
    padding: 1rem;
    border: none;
    font-size: 15px;
    width: 100%;
    font-weight: 600;
  }
  border: none;

  background-color: transparent;
  cursor: pointer;
`;
