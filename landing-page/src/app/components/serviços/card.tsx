"use client";
import { ReactNode } from "react";
import styles from "./card.module.scss";

interface CardProps {
  titulo: string;
  beneficios: string[];
  imagem: ReactNode;
}

export function Card(props: CardProps) {
  return (
    <section className={styles.Container}>
      <p>{props.titulo}</p>
      <ul>
        {props.beneficios.map((item, id) => {
          return (
            <li key={id}>
              {props.imagem}
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
