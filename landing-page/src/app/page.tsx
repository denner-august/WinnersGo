import { Descricao } from "./components/descrição/descricao";
import { Divulgacao } from "./components/divulgacao/divulgacao";
import { Form } from "./components/form/formulario";
import { Header } from "./components/header/header";
import { Plataformas } from "./components/plataformas/plataformas";
import { Indicador } from "./tools/indicador/arrow-down";

import styles from "./page.module.scss";
import { Servicos } from "./components/serviços/servicos";

export default function Home() {
  return (
    <div>
      <Header />
      <Descricao />
      <Divulgacao />
      <Indicador />
      <Plataformas />
      <Servicos />
      <div className={styles.Container}>
        <Form />
      </div>
    </div>
  );
}
