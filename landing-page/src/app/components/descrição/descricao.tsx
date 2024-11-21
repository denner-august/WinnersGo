import { Benenficios } from "@/app/tools/beneficios/benenficios";
import styles from "./descricao.module.scss";

import leads from "../../../../public/icons/atrair_leads.png";
import vendas from "../../../../public/icons/aumentar_vendas.png";
import marca from "../../../../public/icons/destacar_marca.png";
import tempo from "../../../../public/icons/economizar_tempo.png";

export function Descricao() {
  return (
    <div className={styles.Container}>
      <h2>Como o tráfego pago pode ajudar o seu negocio</h2>
      <div className={styles.beneficios}>
        <Benenficios
          title=" Atrair Leads Que Realmente Importam"
          icon={leads}
        />
        <Benenficios title="economizar Tempo e Dinheiro" icon={tempo} />
        <Benenficios title="Destacar Sua Marca e Identidade" icon={marca} />
        <Benenficios title="Aumentar Suas Vendas e Resultados" icon={vendas} />
      </div>
    </div>
  );
}
