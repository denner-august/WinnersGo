"use client";

import { useState } from "react";
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
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={`${styles.cardInner}`}>
        <div className={styles.front}>
          {title ? <p>{title}</p> : null}
          <Image src={icon} alt={`${title} icon`} width={50} height={50} />
        </div>
        <div className={styles.back}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
