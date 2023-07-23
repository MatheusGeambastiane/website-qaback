import { styled } from "styled-components";

export const FormContainer = styled.form`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
    flex: 1;
  gap: 32px;
  @media screen and (max-width: 1000px) {
    padding-top: 1rem;
    margin: 1rem;
    padding-bottom: 2rem;
    h1 {
        font-size: 1.5rem;
    }
  }
  label {
    font-size: 14px;
    font-style: normal;
    margin-left: 1rem;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 132.3%;
  }
  
`;
export const ContainerRegisterInputs = styled.div`
width: 24rem;
display: flex;
flex-direction: column;
gap: 2rem;
padding: 0rem 3rem;
@media screen and (max-width: 1000px) {
    width: 100%;
    gap: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
   
`
export const Input = styled.input`
  border-radius: 14px;
  border: 1px solid ${(props) => props.theme.black};
  padding: 14px 26px;
  width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 132.3%;
`;
export const Button = styled.button`
  border: none;
  width: 15rem;
  border-radius: 87px;
  padding: 14px 59px;
  font-size: 14px;
  font-weight: 400;
  line-height: 132.3%;
  cursor: pointer;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
`;


