import Image from "next/image";
import styles from "./beneficios.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface BenenficiosProps {
  title?: string;
  icon: string | StaticImport; // Permite ícone dinâmico ou estático
  description: string; // Torna a propriedade opcional
}

export function Benenficios({
  title,
  icon,
  description = "teste",
}: BenenficiosProps) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={`${title} icon`} width={60} height={60} />
      {title ? <p>{title}</p> : null}

      <p>{description}</p>
    </div>
  );
}
