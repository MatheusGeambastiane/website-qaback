import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormContainer,
  Input,
  ContainerRegisterInputs,
} from "./styles";
import { Link } from "react-router-dom";

const RegisterFormSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmpassword: z.string(),
});

type RegisterFormInputs = z.infer<typeof RegisterFormSchema>;

export const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm<RegisterFormInputs>({
    resolver: zodResolver(RegisterFormSchema),
  });

  function onSubmit(data: RegisterFormInputs) {
    console.log(data);
    reset();
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h1>Criar conta</h1>
      <ContainerRegisterInputs>
        <div>
          <label>Criar senha</label>
          <Input type="text" {...register("email")} placeholder="Email" />
        </div>
        <div>
          <label>Email</label>
          <Input type="text" {...register("password")} placeholder="Senha" />
        </div>
        <div>
          <label>Confirmar senha</label>
          <Input
            type="text"
            {...register("confirmpassword")}
            placeholder="Confirme sua senha"
          />
        </div>
      </ContainerRegisterInputs>
      <Button type="submit">Criar conta</Button>
      <span>Ja tem uma conta? <Link to={'/'}>Entrar</Link></span>
    </FormContainer>
  );
};
