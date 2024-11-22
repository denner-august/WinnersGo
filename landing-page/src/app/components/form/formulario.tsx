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
    <form
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
      id="formulario-01"
    >
      <input
        {...register("Email", { required: true })}
        placeholder="Seu melhor email"
        name="email"
      />

      <input
        name="button-envio-form"
        type="submit"
        alt="enviar"
        value="Eu quero tansformar meus cliques em resultados"
      />
    </form>
  );
}
