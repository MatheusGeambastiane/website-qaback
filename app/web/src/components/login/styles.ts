import { styled } from "styled-components";

export const FormContainer = styled.form`
  text-align: center;
  display: flex;
  margin-right: 25rem;
  flex-direction: column;
  width: 25rem;
  gap: 22px;
  padding: 1rem;
  label {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 132.3%;
  }
  @media screen and (max-width: 950px) {
    margin-right: 0rem;
    padding: 2rem 4rem;
    width: 100%;
    gap: 0.5rem;
    justify-content: center;
    flex-direction: column;

    img {
      width: 1500px;
    }
  }
  @media screen and (max-width: 1250px) {
    img {
      width: 50%;
    }
  }
  @media screen and (max-width: 1450px) {
    margin-right: 5rem;
  }
`;
export const Input = styled.input`
  border-radius: 14px;
  border: 1px solid ${(props) => props.theme.black};
  padding: 18px 26px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 132.3%;
  @media screen and (max-width: 940px) {
    padding: 8px 16px;
  }
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
  @media screen and (max-width: 940px) {
    padding: 8px 16px;
    margin-top: 0.2rem;
  }
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
    @media screen and (max-width: 940px) {
      gap: 9px;
      margin-top: 0rem;
      padding: 4px 26px;
    }
  }
  @media screen and (max-width: 940px) {
    gap: 15px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 28px;
    @media screen and (max-width: 940px) {
      gap: 9px;
    }
  }
`;
export const DontHaveAccount = styled.div`
  display: flex;
  flex-direction: column;
  .register {
    cursor: pointer;
  }
`;
