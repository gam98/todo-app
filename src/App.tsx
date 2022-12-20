import IconMoon from '/assets/icon-moon.svg'
import Form from './components/Form/Form'
import Todos from './components/Todos/Todos'
import ItemsLeft from './components/ItemsLeft/ItemsLeft'
import ClearCompletedButton from './components/ClearCompletedButton/ClearCompletedButton'
import TabButtons from './components/TabButtons/TabButtons'

function App() {
  return (
    <div className='bg-bg-mobile-light'>
      <div className='flex items-center justify-between w-10/12 mx-auto mb-8 pt-8'>
        <h1 className='text-3xl font-bold uppercase tracking-custom text-very-light-gray-lt'>
          todo
        </h1>
        <button>
          <img src={IconMoon} alt='' aria-hidden='true' className='block' />
        </button>
      </div>
      <div className='w-10/12 mx-auto pb-10 relative'>
        <Form />
        <div className='bg-white absolute w-full translate-y-4 rounded shadow-md'>
          <Todos />
          <div className='flex justify-between p-4 text-dark-grayish-blue-lt text-sm'>
            <ItemsLeft />
            <ClearCompletedButton />
          </div>
          <TabButtons />
        </div>
      </div>
    </div>
  )
}

export default App
