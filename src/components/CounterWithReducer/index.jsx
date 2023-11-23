import { useReducer } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import './styles.sass'

const counterReducer = ( state, action ) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1 }
    case 'Decrement':
      return { count: state.count > 0 ? state.count - 1 : 0 }
    default: 
      return state
  }
}

const initialState = { count: 0 }

const CounterWithReducer = () => {

  const [ state, dispatch ] = useReducer(counterReducer, initialState)

  return (
    <div className='counter-reducer'>
      <button 
        className='counter-reducer__button'
        onClick={() => dispatch({ type: 'Decrement' })}
      >
        <FaMinus />
      </button>
      <span className='counter-reducer__span'>{state.count}</span>
      <button 
        className='counter-reducer__button'
        onClick={() => dispatch({ type: 'Increment' })}
      >
        <FaPlus />
      </button>
    </div>
  )
}

export default CounterWithReducer
