import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaChevronLeft } from 'react-icons/fa'
import CounterWithReducer from '../../components/CounterWithReducer'
import { fetchProductsByParams } from '../../services/productService'
import './styles.sass'

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    fetchProductsByParams({ id })
      .then(response => setProduct(response[0]))
  }, [])

  return (
    <main className='product-detail'>
      <button 
        className='product-detail__back'
        onClick={() => navigate('/')}
      >
        <FaChevronLeft />
      </button>
      <img 
        className='product-detail__image' 
        src={product?.thumbnail} alt='product description' 
      />
      <section className='product-detail__description'>
        <h2 className='product-detail__description--name'>{product?.title}</h2>
        <div className='product-detail__description--rank-price'>
          <div className='rank'>
            <span className='rank__star'><FaStar /></span>
            <span className='rank__number'>{product?.rating}</span>
          </div>
          <div className='price-wrapper'>
            <span className='price old'>${product?.price}</span>
            <span className='price new'>${Math.round(product?.price * ((100 - product?.discountPercentage) / 100), -1)}</span>
          </div>
        </div>
        <p className='product-detail__description--text'>{product?.description}</p>
        <div className='product-detail__description--quantity'>
          <span className='span-quantity'>Quantity</span>
          <CounterWithReducer />
        </div>
        <button className='product-detail__description--cart'>
          <MdOutlineShoppingCart />
          Add to cart
        </button>
      </section>
    </main>
  )
}

export default ProductDetail
