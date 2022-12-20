import { useContext } from 'react'
import { Itodo } from '../../interfaces/Itodo'
import { TodoContext } from '../../context/TodoContext'

function ItemsLeft() {
  const { todos } = useContext(TodoContext)

  const itemsLeft = () => {
    const result = todos.reduce((acc, item: Itodo) => {
      if (!item.done) acc++
      return acc
    }, 0)

    return `${result} items left`
  }

  return <span>{itemsLeft()}</span>
}

export default ItemsLeft
