import AddTodo from './AddTodo'
import { TodoList } from './TodoList'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        <TodoList />
      </header>
      <section className="main"></section>
    </>
  )
}

export default App
