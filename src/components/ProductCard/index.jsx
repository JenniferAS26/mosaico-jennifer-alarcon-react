import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './styles.sass'

const ProductCard = ({ details }) => {
  ProductCard.propTypes = {
    details: PropTypes.object
  }

  const navigate = useNavigate()

  return (
    <article 
      className='product-card'
      onClick={() => navigate(`/product-detail/${details.id}`)}
    >
      <img className='product-card__image' src={details.thumbnail} alt={details.description} />
      <div className='product-card__body'>
        <span className='product-card__body--title'>{details.title}</span>
        <span className='product-card__body--price'>${details.price}</span>
      </div>
    </article>
  )
}

export default ProductCard
