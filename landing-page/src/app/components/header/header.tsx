import styles from "./header.module.scss";

interface HeaderProps {
  title: string;
  subtitle: string;
  CTA: string;
}

export function Header({ title, subtitle, CTA }: HeaderProps) {
  return (
    <div className={styles.container}>
      <span>WinnersGo</span>
      <h1>
        {title} <span>Conquistas Reais</span>{" "}
      </h1>
      <h2>
        <span>Potencialize suas vendas</span>
        {subtitle}
        <span>crescimento contínuo do seu negócio</span>
      </h2>
      <p>
        Descubra Como Podemos <span>Transformar</span> Seu Tráfego em
        <span> Resultados</span>
      </p>

      <form>
        <input type="email" required placeholder="Seu melhor email" />
        <button type="submit">{CTA}</button>
      </form>
    </div>
  );
}
