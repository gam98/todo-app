import { v4 as uuidv4 } from 'uuid';
import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext'

function Form() {
  const { todos, setTodos } = useContext(TodoContext)
  const [todo, setTodo] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodos([...todos, { id: uuidv4(), task: todo, done: false }])
    setTodo('')
  }

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className='flex items-center gap-4 rounded bg-white p-4 dark:bg-very-dark-desaturated-blue-dt'
    >
      <span className='block w-6 h-6 border border-dark-grayish-blue-lt rounded-full '></span>
      <input
        type='text'
        placeholder='Create a new todo...'
        className='outline-none grow dark:bg-very-dark-desaturated-blue-dt dark:text-white'
        value={todo}
        onChange={e => handleChange(e)}
      />
    </form>
  )
}

export default Form
