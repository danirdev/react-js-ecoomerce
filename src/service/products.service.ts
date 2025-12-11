import type { Product } from '../interface'
  
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('http://localhost:3001/products')
    
    if (!response.ok) {
      throw new Error('Error fetching products')
    }
    
    const data = await response.json()
    return data
    
  } catch (error) {
    throw new Error('Network error while fetching products')
  } 
}