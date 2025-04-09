import { PlusCircle } from "@phosphor-icons/react"
import './styles.css'

export function Form(){
    return(
        <form action="">
            <input type="text" placeholder="adicione uma new task"/>
            <button type="submit">criar <PlusCircle size={26}/></button>
        </form>
    )
}