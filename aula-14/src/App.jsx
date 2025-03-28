import { useState } from "react";
import logoImg from "./assets/img/logo.svg";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  function handleSubmit(event) {
    event.preventDefault();

    let formIsValid = true;
    let newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "o email é obrigatorio";
      formIsValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "digite um email valido";
      formIsValid = false;
    }

    if (!password) {
      newErrors = "a senha é obrigatoria";
      formIsValid = false;
    }

    if (password < 6) {
      newErrors = "a senha precisa ter ao menos 6 caracteres";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    console.log("email: ", email);
    console.log("senha: ", password);
  }

  return (
    <div className="container">
      <div className="s-form">
        <img src={logoImg} alt="" />

        <div className="content">
          <h1 className="title">Acesse a plataforma</h1>
          <p className="desc">
            faça login ou registre-se para começar a construir seus projetos
            ainda hoje
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input
              type="email"
              placeholder="digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <div className="s-forgot">
              <label htmlFor="password">senha</label>
              <a href="">esqueceu a senha</a>
            </div>
            <input
              type="password"
              placeholder="digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="sign-in">
              entrar
            </button>
          </form>
          <p className="sign-up">
            ainda não tem nenhuma conta <a href="">inscreva-se</a>
          </p>
        </div>
      </div>
      <div className="s-img"></div>
    </div>
  );
}
