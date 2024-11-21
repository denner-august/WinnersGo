import { Descricao } from "./components/descrição/descricao";
import { Header } from "./components/header/header";
import { Plataformas } from "./components/plataformas/plataformas";

export default function Home() {
  return (
    <div>
      <Header />
      <Descricao />
      <Plataformas />
    </div>
  );
}
