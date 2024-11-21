import Image from "next/image";
import styles from "./beneficios.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export interface BenenficiosProps {
  title: string;
  icon: StaticImport;
}
export function Benenficios(props: BenenficiosProps) {
  const { title, icon } = props;

  return (
    <div className={styles.Container}>
      <p>{title}</p>
      <Image src={icon} alt="icon" />
    </div>
  );
}
