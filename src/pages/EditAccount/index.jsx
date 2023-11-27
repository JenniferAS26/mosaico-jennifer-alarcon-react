import { useCallback, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../auth/context/AuthContext'
import { getUserByParams, saveImage, updateUser } from '../../services/userService'
import Swal from 'sweetalert2'
import './styles.sass'
import { useNavigate } from 'react-router-dom'

const EditAccount = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const [userLogged, setUserLogged] = useState([])
  const [ imagePreview, setImagePreview ] = useState(userLogged.profilePicture)
  const { user } = useContext(AuthContext)

  const handleImageChange = event => {
    const chosenImage = event.target.files[0]
    const imageReaderAPI = new FileReader()
    imageReaderAPI.onloadend = () => {
      setImagePreview(imageReaderAPI.result)
    }
    
    if (chosenImage) {
      imageReaderAPI.readAsDataURL(chosenImage)
    }
  }

  const onSubmit = async ( newUserInfo ) => {
    const file = newUserInfo.profilePicture[0]
    const imageUrl = await saveImage(file)
    const data = {
      name: newUserInfo.name,
      username: newUserInfo.username,
      email: newUserInfo.email,
      password: newUserInfo.password,
      profilePicture: imageUrl
    }
    await updateUser(userLogged.id, data)
    await Swal.fire({
      title: 'Your new info was updated successfully',
      confirmButtonText: 'Ok',
      reverseButtons: true,
      'customClass': {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    navigate('/')
  }

  const getUserLogged = useCallback(() => {
    getUserByParams({ email: user.email })
      .then(response => setUserLogged(response[0]))
  }, [])

  useEffect(() => {
    getUserLogged()
  }, [getUserLogged])

  return (
    <section className='account-container'>
      <div className='account-container__header'>
        <p className='account-container__header--text'>Welcome</p>
        <h2 className='account-container__header--title'>{userLogged.username}</h2>
        <figure className='account-container__header--picture'>
          <img src={imagePreview} alt='profile picture' />
        </figure>
      </div>
      <div className='account-container__main'>
        <form 
          className='account-container__main--form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='profile-picture__input-container'>
              <input 
                type="file"
                id='input-url' 
                className='profile-picture__input-container--input-image'
                name='profilePicture'
                { ...register('profilePicture') }
                accept='image/*'
                onChange={handleImageChange}  
              />
              <label htmlFor="input-url">Edit picture</label>
            </div>
          <input 
            type='text' 
            placeholder={userLogged.name} 
            name='name'
            { ...register('name') }
          />
          <input 
            type='text' 
            placeholder={userLogged.username} 
            name='username'
            { ...register('username') }
          />
          <input 
            type='email' 
            placeholder={userLogged.email} 
            name='email'
            { ...register('email') }
          />
          <input 
            type='password' 
            placeholder='password' 
            name='password'
            { ...register('password') }
          />
          <button type='submit'>Update</button>
        </form>
      </div>
    </section>
  )
}

export default EditAccount
