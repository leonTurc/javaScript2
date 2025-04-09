import LogoImg from '../../assets/logo.svg'
import { Form } from '../form'
import './styles.css'

export function Header(){
return(
    <header>
         <img src={LogoImg} alt="" />
    <Form/>
     </header> 
)
}