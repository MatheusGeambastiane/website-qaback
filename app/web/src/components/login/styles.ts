import { styled } from "styled-components";

export const FormContainer = styled.form`
  text-align: center;
  display: flex;
    margin-right: 20rem;
  flex-direction: column;
  width: 22rem;
  gap: 22px;
  padding: 1rem;
  label {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 132.3%;
  }
`;
export const Input = styled.input`
  border-radius: 14px;
  border: 1px solid ${(props) => props.theme.black};
  padding: 14px 26px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 132.3%;
`;
export const Button = styled.button`
  margin-top: -12px;
  border: none;
  border-radius: 87px;
  padding: 14px 59px;
  font-size: 14px;
  font-weight: 400;
  line-height: 132.3%;
  cursor: pointer;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
`;
export const ForgotThepassword = styled.div`
  display: flex;
  text-align: end;
  flex-direction: column;
  gap: 15px;

  label {
    cursor: pointer;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 132.3%;
  }
`;

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 29px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    border: none;
    border-radius: 14px;
    border: 1px solid ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.text};
    padding: 10px 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 132.3%;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 132.3%;
    gap: 13px;
    svg {
      width: 22px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;
export const DontHaveAccount = styled.div`
  display: flex;
  flex-direction: column;
  .register {
    cursor: pointer;
  }
`;
