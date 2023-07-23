import { useForm } from "react-hook-form";
import {
  Button,
  FormContainer,
  Input,
  ForgotThepassword,
  Register,
  DontHaveAccount,
} from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleIcon } from "../icons/social/google";
import { FacebookIcon } from "../icons/social/facebook";

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginFormInputs = z.infer<typeof loginFormSchema>;
export const Login = () => {
  const { register, handleSubmit, reset } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(data: LoginFormInputs) {
    console.log(data);
    reset();
  }
  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <label>Faça login</label>
        <Input type="text" placeholder="Email" {...register("email")} />
        <ForgotThepassword>
          <Input type="text" placeholder="Senha" {...register("password")} />
          <label>Esqueceu a senha?</label>
        </ForgotThepassword>
        <Button>Iniciar sessão</Button>
        <Register>
          <label>Ou cadastre-se com</label>
          <div>
            <button>
              <GoogleIcon />
              Entrar com o Google
            </button>
            <button>
              <FacebookIcon />
              Entrar com o Facebook
            </button>
          </div>
        </Register>
        <DontHaveAccount>
          <span>Não possui uma conta?</span>
          <span className="register">
            <strong>Clique aqui e registre-se</strong>
          </span>
        </DontHaveAccount>
      </FormContainer>
    </>
  );
};
