const BASE_URL = 'https://products-service-7m2n.onrender.com'
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkd5jyxby/auto/upload'

const endpoints = {
  products: `${BASE_URL}/products`,
  tasks: `${BASE_URL}/tasks`,
  users: `${BASE_URL}/users`,
  cloudinary: CLOUDINARY_URL,
}

export default endpoints