import Layout from '../components/layout/Layout'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()

  return (
    <Layout>
      <h1>ProductDetail Page productId = {id} </h1>
    </Layout>
  )
}

export default ProductDetail

// https://reactrouter.com/web/api/Hooks/useparams
