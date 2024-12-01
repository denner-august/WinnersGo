import Image from "next/image";
import styles from "./arrow.module.scss";
import ImageArrowDown from "../../../../public/icons/arrow-down.png";
export function Indicador() {
  return (
    <div className={styles.Container}>
      <Image src={ImageArrowDown} alt="seta apontando para baixo" />
    </div>
  );
}
