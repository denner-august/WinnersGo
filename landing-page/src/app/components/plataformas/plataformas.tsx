import { Benenficios } from "@/app/tools/beneficios/benenficios";

import facebook from "../../../../public/icons/face.png";
import instagram from "../../../../public/icons/instagram.png";
import googleads from "../../../../public/icons/googleads.png";
import linkedin from "../../../../public/icons/linkedin.png";

import styles from "./plataformas.module.scss";
export function Plataformas() {
  return (
    <div className={styles.Container}>
      <h3>
        coloque <span>sua empresa</span> onde a{" "}
        <span>atenção do seu publico</span> está
      </h3>
      <div className={styles.plataformas}>
        <Benenficios
          icon={facebook}
          description="Com bilhões de usuários ativos, o Facebook conecta sua empresa a um público diversificado e altamente segmentado, perfeito para alcançar seus clientes ideais."
        />
        <Benenficios
          icon={googleads}
          description="Seja encontrado exatamente quando as pessoas estão procurando pelo que você oferece. Anúncios no Google garantem visibilidade no momento certo"
        />
        <Benenficios
          icon={instagram}
          description="Alcance seu público com anúncios visuais impactantes, ideais para engajar e fortalecer a presença da sua marca em um ambiente altamente interativo"
        />

        <Benenficios
          icon={linkedin}
          description="Alcance profissionais e empresas no maior hub de negócios do mundo. Ideal para quem quer gerar oportunidades no mercado B2B e fortalecer sua autoridade."
        />
      </div>
    </div>
  );
}
