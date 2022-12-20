import { useContext } from 'react'
import { Itodo } from '../../interfaces/Itodo'
import IconCheck from '/assets/icon-check.svg'
import { TodoContext } from '../../context/TodoContext'

function DoneButton({ done, id }: { done: boolean; id: string }) {
  const { todos, setTodos } = useContext(TodoContext)

  const handleClick = () => {
    setTodos(
      todos.map((todo: Itodo) => ({
        ...todo,
        done: todo.id === id ? !todo.done : todo.done
      }))
    )
  }

  return (
    <>
      {done ? (
        <button
          onClick={handleClick}
          className='w-6 h-6 rounded-full bg-check-background'
        >
          <img
            src={IconCheck}
            alt=''
            aria-hidden='true'
            className='block mx-auto'
          />
        </button>
      ) : (
        <button
          onClick={handleClick}
          className='w-6 h-6 border border-dark-grayish-blue-lt rounded-full'
        ></button>
      )}
    </>
  )
}

export default DoneButton
