import PropTypes from 'prop-types'
import { useState } from 'react'
import ProductCard from '../ProductCard'
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
            all
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('smartphones')}
          >
            smartphones
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('laptops')}
          >
            laptops
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('fragrances')}
          >
            fragrances
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('skincare')}
          >
            skincare
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('groceries')}
          >
            groceries
          </li>
          <li 
            className='item'
            onClick={() => handleCategoryClick('home-decoration')}
          >
            home decoration
          </li>
        </ul>
      </div>
      <div className='cards-container'>
        {/* {
          filteredProducts.map((product, index) => (
            <ProductCard key={index} details={product} />
          ))
        } */}
      </div>
    </section>
  )
}


export default MisProductos
