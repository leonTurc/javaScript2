import { Card} from "./components/card";
import { Button } from "./components/button";
import { List } from "./components/list";

export function App() {
  return (
    <>
      <div class="miniContainer">
        <h1 id="superelipse"> MAIS VANTAJOSO </h1>
      </div>
      <div className="cardContainer">
        <Card desc="PARA VOCÊ DECOLAR" title="Ultimate" preco="29,97" />
        <Button title="Assinar agora"/>
        <hr />
        <List
          i1="Usuários ilimitados"
          i2="Suporte 24/7"
          i3="CSM Dedicado"
          i4="Treinamentos"
        />
      </div>
    </>
  );
}
