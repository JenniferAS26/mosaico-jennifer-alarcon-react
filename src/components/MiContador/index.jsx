import { useState } from 'react'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import './styles.sass'

const MiContador = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(( value ) => value + 1)
  }

  const decrement = () => {
    if ( counter === 0 ) return
    setCounter(( value ) => value - 1)
  }

  return (
    <section className='counter-container'>
      <button 
        className='counter-container__button' 
        onClick={() => decrement()}
      >
        <MinusOutlined />
      </button>
      <span className='counter-container__span'>
        {counter}
      </span>
      <button 
        className='counter-container__button' 
        onClick={() => increment()}
      >
        <PlusOutlined />
      </button>
    </section>
  )
}

export default MiContador
