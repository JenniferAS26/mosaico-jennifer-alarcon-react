import PropTypes from 'prop-types'
import './styles.sass'

const ProductCard = ({ details }) => {
  ProductCard.propTypes = {
    details: PropTypes.object
  }

  return (
    <article className='product-card'>
      <img className='product-card__image' src={details.thumbnail} alt={details.description} />
      <div className='product-card__body'>
        <span className='product-card__body--title'>{details.title}</span>
        <span className='product-card__body--price'>${details.price}</span>
      </div>
    </article>
  )
}

export default ProductCard
