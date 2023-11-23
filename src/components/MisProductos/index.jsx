import PropTypes from 'prop-types'
import { useState } from 'react'
import ProductCard from '../ProductCard'
import smartphone from '../../assets/images/smartphone.jpg'
import laptop from '../../assets/images/laptop.jpg'
import fragrances from '../../assets/images/fragrances.jpg'
import skincare from '../../assets/images/skincare.jpg'
import groceries from '../../assets/images/groceries.jpg'
import homeDeco from '../../assets/images/home-deco.jpg'
import other from '../../assets/images/all.jpg'
import './styles.sass'


const MisProductos = ({ products }) => {
  MisProductos.propTypes = {
    products: PropTypes.array
  }
  
  const [selectCategory, setSelectCategory] = useState(null)

  const handleCategoryClick = ( category ) => {
    setSelectCategory(category)
  }

  const filteredProducts = selectCategory ? products.filter(product => product.category === selectCategory) : products

  return (
    <section className='products'>
      <div className='products__options'>
        <ul className='products__options--list'>
          <li 
            className='item'
            onClick={() => handleCategoryClick('')}
          >
            <img className='thumbnail' src={other} alt='thumbnail picture' />
            <span>All</span>
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('smartphones')}
          >
            <img className='thumbnail' src={smartphone} alt='smartphone illustration' />
            <span>Smartphones</span>
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('laptops')}
          >
            <img className='thumbnail' src={laptop} alt='' />
            <span>Laptops</span>
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('fragrances')}
          >
            <img className='thumbnail' src={fragrances} alt='' />
            <span>Fragrances</span>
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('skincare')}
          >
            <img className='thumbnail' src={skincare} alt='' />
            <span>Skincare</span>
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('groceries')}
          >
            <img className='thumbnail' src={groceries} alt='' />
            <span>Groceries</span>
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('home-decoration')}
          >
            <img className='thumbnail' src={homeDeco} alt='' />
            <span className='span-home-deco'>Home Decoration</span>
          </li>
        </ul>
      </div>
      <div className='cards-container'>
        {
          filteredProducts.map((product, index) => (
            <ProductCard key={index} details={product} />
          ))
        }
      </div>
    </section>
  )
}


export default MisProductos
