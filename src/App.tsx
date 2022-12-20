import IconMoon from '/assets/icon-moon.svg'
import Form from './components/Form/Form'
import Todos from './components/Todos/Todos'
import ItemsLeft from './components/ItemsLeft/ItemsLeft'
import ClearCompletedButton from './components/ClearCompletedButton/ClearCompletedButton'
import TabButtons from './components/TabButtons/TabButtons'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className='bg-bg-mobile-light bg-cover md:bg-bg-desktop-light dark:bg-bg-mobile-dark dark:lg:bg-bg-desktop-dark'>
      <div className='flex items-center justify-between w-10/12 mx-auto mb-8 pt-8 lg:w-2/5'>
        <h1 className='text-3xl font-bold uppercase tracking-custom text-very-light-gray-lt'>
          todo
        </h1>
        <button onClick={handleThemeSwitch}>
          <img src={IconMoon} alt='' aria-hidden='true' className='block' />
        </button>
      </div>
      <div className='w-10/12 mx-auto pb-10 relative lg:w-2/5'>
        <Form />
        <div className='bg-white absolute w-full translate-y-4 rounded shadow-md dark:bg-very-dark-desaturated-blue-dt'>
          <Todos />
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
