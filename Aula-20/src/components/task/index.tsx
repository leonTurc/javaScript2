import { Trash } from "@phosphor-icons/react";
import './styles.css';
interface TaskProps{
    description: string;
    id: number;
    completed: boolean
    onDelete: (id : number) => void;
    onUpdate: (id: number, completed: boolean) => void;
}

export function Task({description, id, completed, onDelete, onUpdate}: TaskProps) {
  return (
     <div className="task-container">
      <input type="checkbox" onClick={() => onUpdate({ id, completed })}/>
        <p className="task-description">
          {description}
        </p>
        <button type="button" className="delete-btn" onClick={( ) => onDelete(id)}>
            <Trash size={24}/>
        </button>
      </div>
  );
}
