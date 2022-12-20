import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Itodo } from '../interfaces/Itodo'

export const TodoContext = createContext({
  todos: [],
  setTodos: (todos: Itodo[]) => {},
  handleTodos: (todos: Itodo[]) => {}
})

export const TodoProvider = ({ children }: { children: JSX.Element }) => {
  const [todos, setTodos, handleTodos] = useLocalStorage('todos', [])

  const value = { todos, setTodos, handleTodos }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
