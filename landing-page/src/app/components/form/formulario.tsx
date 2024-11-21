"use client";
import styles from "./form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  Email: string;
  lastName: string;
  age: number;
}

export function Form() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("Email", { required: true })}
        placeholder="Seu melhor email"
      />

      <input
        name="submit"
        type="submit"
        alt="enviar"
        value="Vamos Tansformar Meus Cliques em Resultados"
      />
    </form>
  );
}
