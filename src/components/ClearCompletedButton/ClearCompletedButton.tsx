import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { Itodo } from '../../interfaces/Itodo'

function ClearCompletedButton() {
  const { todos, setTodos } = useContext(TodoContext)

  const handleClick = () => setTodos(todos.filter((todo: Itodo) => !todo.done))

  return (
    <>
      {todos.length > 0 && (
        <button onClick={handleClick}>Clear Completed</button>
      )}
    </>
  )
}

export default ClearCompletedButton
