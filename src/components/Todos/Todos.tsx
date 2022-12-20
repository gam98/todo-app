import { useContext } from 'react'
import { Itodo } from '../../interfaces/Itodo'
import { TodoContext } from '../../context/TodoContext'
import Todo from '../Todo/Todo'

function Todos() {
  const { todos } = useContext(TodoContext)

  return (
    <>
      {todos.map((todo: Itodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  )
}

export default Todos
