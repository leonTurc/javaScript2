import { Header } from "./components/header";
import { Task } from "./components/task";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { TodoType } from "./types/todo";

import "./App.css";

export function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [ status, setStatus] = useState(false);
  const userId = 1;

  useEffect(() => {
    api.get(`/user/${userId}`).then((response) => {
      setTodos(response.data.todos);
    });
  }, []);

  const handleUpdateTodo = async(id : number, status : boolean) => {
    await api.put(`/${id}`, {
      completed: status
    })

    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: status } : todo
      )
    );

    setStatus(true)

  }

  const handleAddTodo = async (newTodo: string) => {
    const response = await api.post("/add", {
      todo: newTodo,
      completed: false,
      userId,
    });

    const newTask = {
      ...response.data, id: response.data.id || Math.floor(Math.random()*1000000)
    }

    setTodos((prevTodos) => [newTask, ...prevTodos]);
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await api.delete(`/${id}`);
    } catch (error) {
      console.warn(`Não foi possível deletar na API, mas removendo localmente`);
    }

    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header onAddTodo={handleAddTodo} />
      <div className="todo-list">
        <div className="header">
          <div className="created-tasks">
            <p> Tarefas criadas </p>
            <span> {todos.length} </span>
          </div>

          <div className="completed-tasks">
            <p> Concluídas </p>
            <span> {todos.filter((todo) => todo.completed).length} </span>
          </div>
        </div>

        <div className="tasks-list">
          {todos.map(({ id, todo }) => (
            <Task key={id} id={id} description={todo} completed={status} onDelete = { handleDeleteTodo } onUpdate={handleUpdateTodo}/>
          ))}
        </div>
      </div>
    </>
  );
}
