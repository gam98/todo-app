import { useContext } from 'react'
import { Itodo } from '../../interfaces/Itodo'
import { TodoContext } from '../../context/TodoContext'
import Todo from '../Todo/Todo'
import { Draggable } from 'react-beautiful-dnd'

function Todos() {
  const { todos } = useContext(TodoContext)

  return (
    <>
      {todos.map((todo: Itodo, index: number) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {draggableProvided => (
            <div
              className='p-4 flex items-center justify-between border-b border-b-very-light-grayish-blue-lt dark:border-b-very-dark-grayish-blue-lt'
              {...draggableProvided.draggableProps}
              {...draggableProvided.dragHandleProps}
              ref={draggableProvided.innerRef}
            >
              <Todo todo={todo} />
            </div>
          )}
        </Draggable>
      ))}
    </>
  )
}

export default Todos
