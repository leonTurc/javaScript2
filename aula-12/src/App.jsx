import { Fragment } from "react";
import logoImg from "./assets/img/logo.svg";
import { Card } from "./components/cards";
import data from "../data.json";
import loc from "./assets/img/local.png";

export function App() {
  return (
    <>
      <main id="s-main">
        <img src={logoImg} alt="" />
      </main>
      <section className="best-sellers">
        <h1 className="s-title">mais vendidas</h1>

        <div className="products">
          {data.pizza.map(({ id, img, title, description, price }) => (
            <Card
              key={id}
              img={img}
              title={title}
              desc={description}
              price={price}
            />
          ))}
        </div>
      </section>
      <section className="about">
        <img src={loc} alt="" />
        <p className="title">
          Sobre a La P<span>i</span>
          <span>z</span>
          <span>z</span>
          <span>a</span>
        </p>
        <p>
          Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência
          de pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de
          pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma
          sedutor de massa fresca assa no forno, criando as pizzas mais
          deliciosas da cidade.
        </p>
        <button>Ler mais sobre</button>
      </section>
    </>
  );
}
