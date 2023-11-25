import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/AuthContext'
import './styles.sass'
import { getUserByParams } from '../../../services/userService'
import Swal from 'sweetalert2'

const SignIn = () => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()
  const { login } = useContext( AuthContext )

  const onSubmit = async ( dataUser ) => {
    const userAuthenticate = await getUserByParams({ email: dataUser.email })

    if (userAuthenticate.length) {
      if (userAuthenticate[0]?.password === dataUser.password) {
        login(dataUser.email, dataUser.password)
        navigate('/')
      } else {
        Swal.fire({
          title: 'Email or password wrong!',
          confirmButtonText: 'Ok',
          reverseButtons: true,
          "customClass": {
              button: 'custom-button',
              htmlContainer: 'custom-container'
          },
        })
      }
    } else {
      Swal.fire({
        title: 'Email or password wrong, please try again!',
        confirmButtonText: 'Ok',
        reverseButtons: true,
        "customClass": {
            button: 'custom-button',
            htmlContainer: 'custom-container'
        },
      })
    }
    reset()
  }

  return (
    <section className='sign-in container'>
      <div className='sign-in__header'>
        <h2 className='sign-in__header--title'>Sign in</h2>
        <Link to='/sign-up'>
          <span className='sign-in__header--text'>Sign up</span>
        </Link>
      </div>
      <form 
        className='sign-in__form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input 
          className='sign-in__form--input' 
          type='email' 
          placeholder='Enter your email' 
          name='email'
          { ...register('email', { required: true }) }
        />
        <input 
          className='sign-in__form--input' 
          type='password' 
          placeholder='Enter your password' 
          name='password'
          { ...register('password', { required: true }) }
        />
        <button type='submit'
          className='sign-in__form--button' 
        >
          Sign in
        </button>
      </form>
    </section>
  )
}

export default SignIn
