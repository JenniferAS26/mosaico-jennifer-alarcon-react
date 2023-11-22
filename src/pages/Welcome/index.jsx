/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import image from '../../assets/images/welcome-image-2.jpg'
import './styles.sass'

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <main className='welcome'>
      <img className='welcome__image' src={image} alt='wallpaper image' />
      <div className='welcome__bottom'>
        <h1 className='welcome__bottom--title'>Welcome to your multi-purpose APP</h1>
        <button 
          className='welcome__bottom--button'
          onClick={() => navigate('/')}
        >
          Let's go
        </button>
      </div>
    </main>
  )
}

export default Welcome
