import { Card } from "./card";
import styles from "./servicos.module.scss";
import aprovado from "../../../../public/icons/aprova_servicos.png";
import reprovado from "../../../../public/icons/remove.png";
import Image from "next/image";

export function Servicos() {
  const beneficios = [
    "Mais tempo para focar no seu negocio",
    "Economia de tempo e esforço",
    "Criação de públicos altamente segmentados, focados em conversão.",
    "Instalação de tags estratégicas no site para monitoramento eficiente.",
    "Otimização diária das campanhas para garantir o melhor desempenho e maximizar resultados.",
    "Relatórios mensais completos para prestação de contas e acompanhamento dos resultados.",
    "Geração de leads qualificados através de formulários nativos do Facebook Ads.",
    "Entrega de anúncios segmentados para pessoas na sua região de atuação.",
  ];

  const semBenenficios = [
    "1497 e 3 meses em um curso",
    "Sem conhecimento adequado, você pode deixar de alcançar os clientes mais relevantes para o seu negócio.",
    "em as tags corretas, fica impossível rastrear resultados, entender o comportamento dos visitantes ou mensurar conversões.",
    "Campanhas sem otimização regular correm o risco de perder relevância, aumentar custos e gerar menos resultados.",
    "Sem dados organizados, é difícil entender o que está funcionando ou ajustar o que não está.",
    "Campanhas que não são otimizadas para a sua região ou nicho podem atrair leads sem qualidade ou interesse.",
  ];

  const imgAprovado = <Image src={aprovado} alt="icone verde de aprovação" />;
  const imgreprovado = <Image src={reprovado} alt="icone verde de aprovação" />;

  return (
    <div className={styles.Container}>
      <h3>Porque ter um gestor de tráfego</h3>

      <div className={styles.sectionContainer}>
        <Card
          titulo="Gestor de tráfego"
          beneficios={beneficios}
          imagem={imgAprovado}
        />
        <Card
          titulo="Sem um Gestor de tráfego"
          beneficios={semBenenficios}
          imagem={imgreprovado}
        />
      </div>
    </div>
  );
}
