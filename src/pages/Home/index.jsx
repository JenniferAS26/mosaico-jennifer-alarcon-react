import { useCallback, useContext, useEffect, useState } from 'react'
import MisProductos from '../../components/MisProductos'
import { fetchProducts } from '../../services/productService'
import { IoSearch } from "react-icons/io5"
import profilePicture from '../../assets/images/profile.jpg'
import { AuthContext } from '../../auth/context/AuthContext'
import { getUserByParams } from '../../services/userService'
import './styles.sass'

const Home = () => {
  const [products, setProducts] = useState([])
  // const [userLogged, setUserLogged] = useState([])

  // const { user } = useContext(AuthContext)

  // const getUser = useCallback(() => {
  //   getUserByParams({ email: user.email })
  //     .then(response => setUserLogged(response[0]))
  // }, [])
  
  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response))
  }, [])

  // useEffect(() => {
  //   getUser()
  // }, [getUser])

  return (
    <main className='home'>
      <section className='home__top'>
        <h2 className='home__top--title'>Let's Discover</h2>
        <img className='home__top--image' src={profilePicture} alt='profile picture' />
      </section>
      <form className='home__search'>
        <button 
          className='home__search--button'
        >
          <IoSearch />
        </button>
        <input 
          className='home__search--input' 
          type='text' 
          placeholder='Search a product' 
        />
      </form>
      <MisProductos products={products}/>
    </main>
  )
}

export default Home
