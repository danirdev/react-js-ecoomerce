import { useEffect } from 'react'
import Hero from '../../components/iu/Hero/Hero'
import { useState } from 'react'

const Home = () => {

  const [products, setproducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/products')
      const data = await response.json()
      setproducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(products);
  

  return (
    <>
      <Hero />
    </>
  )
}

export default Home
