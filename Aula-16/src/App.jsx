import { Perfil } from "./components/perfil";
import { Post } from './components/post'
import profileImg from "./assets/img/leslie.png";

export function App() {
  return (
    <>
      <Post image= {profileImg} name= "sim" desc= "não" text= "talvez"/>
    </>
  );
}
