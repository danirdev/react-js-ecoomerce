import type { Product } from '../interface'
  
export const getProducts = async (page = 1): Promise<Product[]> => {
  const limit = 10
  const start = (page - 1) * limit
  const end = start + limit
  
  try {
    const response = await fetch(`http://localhost:3001/products?_start=${start}&_end=${end}`)
    
    if (!response.ok) {
      throw new Error('Error fetching products')
    }
    
    const data = await response.json()
    return data
    
  } catch (error) {
    throw new Error('Network error while fetching products')
  } 
}

export const createProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await fetch('http://localhost:3001/products', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    if (!response.ok) {
      throw new Error('Error creating product')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Network error while creating product')
  }
}