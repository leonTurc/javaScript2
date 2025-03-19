import "./style.css";

export function ButtonLink({name, link}){
return(
    <a href={link} className="button-link">{name}</a>
)
}