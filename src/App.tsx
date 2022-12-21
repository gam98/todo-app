import IconMoon from '/assets/icon-moon.svg'
import IconSun from '/assets/icon-sun.svg'
import Form from './components/Form/Form'
import Todos from './components/Todos/Todos'
import ItemsLeft from './components/ItemsLeft/ItemsLeft'
import ClearCompletedButton from './components/ClearCompletedButton/ClearCompletedButton'
import TabButtons from './components/TabButtons/TabButtons'
import { useContext, useEffect } from 'react'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'
import { TodoContext } from './context/TodoContext'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const { todos, setTodos } = useContext(TodoContext)
  const [theme, setTheme] = useLocalStorage('theme', '')

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [theme])

  const handleThemeSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setTodos(items)
  }

  return (
    <div className='bg-bg-mobile-light bg-cover h-52 md:bg-bg-desktop-light dark:bg-bg-mobile-dark dark:md:bg-bg-desktop-dark lg:h-64'>
      <div className='flex items-center justify-between w-10/12 mx-auto mb-8 pt-8 lg:w-2/5 lg:pt-12'>
        <h1 className='text-3xl font-bold uppercase tracking-custom text-very-light-gray-lt'>
          todo
        </h1>
        <button onClick={handleThemeSwitch}>
          {theme === 'light' ? (
            <img src={IconMoon} alt='' aria-hidden='true' className='block' />
          ) : (
            <img src={IconSun} alt='' aria-hidden='true' className='block' />
          )}
        </button>
      </div>
      <div className='w-10/12 mx-auto pb-10 relative lg:w-2/5'>
        <Form />
        <div className='bg-white absolute w-full top-20 rounded shadow-md dark:bg-very-dark-desaturated-blue-dt'>
          <DragDropContext onDragEnd={result => handleOnDragEnd(result)}>
            <Droppable droppableId='todos'>
              {droppableProvided => (
                <div
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                >
                  <Todos />
                  {droppableProvided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className='flex justify-between p-4 text-dark-grayish-blue-lt text-sm lg:items-center'>
            <ItemsLeft />
            <TabButtons />
            <ClearCompletedButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
