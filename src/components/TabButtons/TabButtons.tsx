import { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { Itodo } from '../../interfaces/Itodo'

function TabButtons() {
  const { handleTodos } = useContext(TodoContext)
  const [tab, setTab] = useState('all')

  const todosLs = JSON.parse(localStorage.getItem('todos') || '{}')

  const tabs = {
    all: () => {
      setTab('all')
      handleTodos(todosLs)
    },
    active: () => {
      setTab('active')
      handleTodos(todosLs.filter((todo: Itodo) => !todo.done))
    },
    completed: () => {
      setTab('completed')
      handleTodos(todosLs.filter((todo: Itodo) => todo.done))
    }
  }

  return (
    <div className='absolute left-0 -bottom-20 w-full flex justify-center gap-4 shadow-md p-4 rounded text-sm text-very-dark-grayish-blue-lt font-medium bg-white lg:static lg:shadow-none lg:w-fit lg:p-0 dark:bg-very-dark-desaturated-blue-dt'>
      <button
        onClick={tabs['all']}
        className={`${tab === 'all' && 'text-bright-blue font-bold'}`}
      >
        All
      </button>
      <button
        onClick={tabs['active']}
        className={`${tab === 'active' && 'text-bright-blue font-bold'}`}
      >
        Active
      </button>
      <button
        onClick={tabs['completed']}
        className={`${tab === 'completed' && 'text-bright-blue font-bold'}`}
      >
        Completed
      </button>
      <p className='absolute left-0 text-center w-full -bottom-16 text-dark-grayish-blue-lt'>
        Drag and drop to reorder list
      </p>
    </div>
  )
}

export default TabButtons
