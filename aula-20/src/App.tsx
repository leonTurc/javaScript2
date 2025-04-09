import { Header } from "./components/header"

export function App() {
  return (
    <>
      <Header/>

      <div className="todo-list">
        <div className="created-tasks">
          <p>tasks criadas</p>
          <span>16</span>
        </div>
        <div className="completed-tasks">
        <p>tasks completadas</p>
        <span>8</span>
        </div>
      </div>
    </>
  )
}

export default App
