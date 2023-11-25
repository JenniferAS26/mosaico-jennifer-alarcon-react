import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { createUser } from '../../../services/userService'
import '../SignIn/styles.sass'

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

  const onSubmit = async ( newUser ) => {
    const userData = {
      name: newUser.name,
      username: '',
      email: newUser.email,
      password: newUser.password,
      profilePicture: ''
    }
    await createUser(userData)
    reset()
    navigate('/sign-in')
  }

  return (
    <section className='sign-in container'>
      <div className='sign-in__header'>
        <h2 className='sign-in__header--title'>Sign up</h2>
        <Link to='/sign-in'>
          <span className='sign-in__header--text'>Sign in</span>
        </Link>
      </div>
      <form 
        className='sign-in__form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input 
          className='sign-in__form--input' 
          type='text' 
          placeholder='Enter your name' 
          name='name'
          { ...register('name', { required: true })}
        />
        <input 
          className='sign-in__form--input' 
          type='email' 
          placeholder='Enter your email' 
          name='email'
          { ...register('email', { required: true })}
        />
        <input 
          className='sign-in__form--input' 
          type='password' 
          placeholder='Enter your password'
          name='password'
          { ...register('password', { required: true })} 
        />
        <button className='sign-in__form--button'>Sign up</button>
      </form>
    </section>
  )
}

export default SignUp
