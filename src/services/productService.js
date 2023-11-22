import axios from 'axios'

const BASE_URL = 'https://products-service-7m2n.onrender.com'

const fetchProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/products`)
    return data
  } catch (error) {
    console.warn(error)
  }
}

export { fetchProducts }