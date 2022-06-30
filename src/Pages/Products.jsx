import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Pending from '../Components/Pending'
import ProductDisplay from '../Components/ProductDisplay'
import "./Products.css"
const Products = () => 
{

    let [products , setProducts] = useState([])
    let [pending , setPending] = useState(true)
    let [error , setError] = useState(null)

    useEffect(()=>{
            setTimeout(()=>{
                fetch("http://localhost:8000/products").then((response)=>
        {
            if(response.ok === false)
            {
                throw Error(`GET Not Found`)
            }
            return response.json()
        }).then((content)=>
        {
            setProducts(content)
            setPending(false)
        }).catch((err)=>
        {
            setError(err.message)
            setPending(false)
        })
            } , 1000)
    } , [])


  return (
    <div className='products'>
      <h1>here are the list of products added</h1>
      {error && <h1>{error}</h1>}
      {pending && <Pending/>}
      {products && <ProductDisplay products = {products}/>}
    </div>
  )
}

export default Products
