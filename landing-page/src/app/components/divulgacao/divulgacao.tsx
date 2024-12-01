import Image from "next/image";
import styles from "./divulgacao.module.scss";
import ImageAprovado from "../../../../public/icons/aprovado.png";
export function Divulgacao() {
  return (
    <div className={styles.Container}>
      <div>
        <p>O tráfego pago é para você que quer divulgar</p>
      </div>

      <ul>
        <li>
          <span>
            <Image src={ImageAprovado} alt="aprovado" />
          </span>
          Infoprodutos
        </li>
        <li>
          <span>
            <Image src={ImageAprovado} alt="aprovado" />
          </span>
          negócio local
        </li>
        <li>
          <span>
            <Image src={ImageAprovado} alt="aprovado" />
          </span>
          Ecommerce
        </li>
        <li>
          <span>
            <Image src={ImageAprovado} alt="aprovado" />
          </span>
          prestação de serviço
        </li>
        <li>
          <span>
            <Image src={ImageAprovado} alt="aprovado" />
          </span>
          Loja online
        </li>
      </ul>
    </div>
  );
}
