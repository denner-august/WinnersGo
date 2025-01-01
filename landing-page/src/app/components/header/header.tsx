import { Form } from "../form/formulario";
import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <span>WinnersGo</span>
      <h1>
        Transformamos cliques em <span>Conquistas Reais</span>
      </h1>
      <h2>
        <span>Potencialize suas vendas</span> e construa uma presença marcante
        com um parceiro focado em resultados e no
        <span> crescimento contínuo do seu negócio</span>
      </h2>
      <p>
        Descubra Como Podemos <span>transformar</span> seu tráfego em
        <span> Resultados</span>
      </p>

      <Form />
    </div>
  );
}
