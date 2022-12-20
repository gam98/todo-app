import { useContext } from 'react'
import { Itodo } from '../../interfaces/Itodo'
import IconCross from '/assets/icon-cross.svg'
import { TodoContext } from '../../context/TodoContext'

function DeleteButton({ id }: { id: string }) {
  const { todos, setTodos } = useContext(TodoContext)

  const handleClick = () =>
    setTodos(todos.filter((todo: Itodo) => todo.id !== id))

  return (
    <button onClick={handleClick}>
      <img src={IconCross} alt='' aria-hidden='true' />
    </button>
  )
}

export default DeleteButton
