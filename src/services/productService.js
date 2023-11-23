import axios from 'axios'
import endpoints from './endpoints'


const fetchProducts = async () => {
  try {
    const { data } = await axios.get(endpoints.products)
    return data
  } catch (error) {
    console.warn(error)
  }
}

const fetchProductsByParams = async ( params ) => {
  try {
    const { data } = await axios.get(endpoints.products, { params: params })
    return data
  } catch (error) {
    console.warn(error)
  }
}

export { fetchProducts, fetchProductsByParams }