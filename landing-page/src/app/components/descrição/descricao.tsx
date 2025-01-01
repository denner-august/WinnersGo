import { Benenficios } from "@/app/tools/beneficios/benenficios";
import styles from "./descricao.module.scss";

import leads from "../../../../public/icons/atrair_leads.png";
import vendas from "../../../../public/icons/aumentar_vendas.png";
import marca from "../../../../public/icons/destacar_marca.png";
import tempo from "../../../../public/icons/economizar_tempo.png";

export function Descricao() {
  return (
    <div className={styles.Container}>
      <h2>
        Como o tráfego pago pode <span>ajudar o seu negocio</span>
      </h2>
      <div className={styles.beneficios}>
        <Benenficios
          title=" Atrair leads que realmente importam"
          icon={leads}
          description="Conecte-se com pessoas interessadas nos seus produtos ou serviços e transforme visitantes em clientes qualificados"
        />
        <Benenficios
          title="Economizar tempo e dinheiro"
          icon={tempo}
          description="Deixe a gestão de tráfego comigo e libere seu tempo para focar no que realmente importa: fazer o seu negócio crescer"
        />
        <Benenficios
          title="Destacar Sua Marca e identidade"
          icon={marca}
          description="Fortaleça a presença do seu negócio e conquiste reconhecimento no mercado com campanhas direcionadas"
        />
        <Benenficios
          title="Aumentar suas vendas e resultados"
          icon={vendas}
          description="Transforme cada investimento em tráfego pago em crescimento real para o seu faturamento"
        />
      </div>
    </div>
  );
}
