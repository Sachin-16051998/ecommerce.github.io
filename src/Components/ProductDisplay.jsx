import React from 'react'
import {useNavigate} from "react-router-dom"
import "./ProductDisplay.css"

const ProductDisplay = ({products}) => 
{
  let Navigate = useNavigate()
  const handleDelete = (id)=>
  {
    fetch(`http://localhost:8000/products/${id}` , {method:"DELETE"}).then(()=>
    {
      alert("You have Choose to delete this item")
      Navigate("/Response")
    })
  }
  return (
    <div>
      {
        products.map((individualProd)=>
        {
          return(
            <div className="prodDetails">
              <img src={individualProd.prodImage} alt="ig" height="250px" width="180px"  />
              <h4>{individualProd.prodName}</h4>
              <h2>prize:<small>{individualProd.prize} - INR</small></h2>
              <button onClick={()=>{handleDelete(individualProd.id)}}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductDisplay
