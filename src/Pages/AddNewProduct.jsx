import React from 'react'
import { useState } from 'react'
import "./AddNewProduct.css"
import {useNavigate} from "react-router-dom"
const AddNewProduct = () => 
{

    let [prodName , setProdName] = useState("")
    let [prodImage , setProdImage] = useState("")
    let [prize , setPrize] = useState(0)
    let Navigate = useNavigate()
    let data = {prodName , prodImage , prize};

    const handleSubmit =(e)=>
    {
        e.preventDefault()

        fetch("http://localhost:8000/products" , {method:"POST" , headers:{"Content-Type":"application/json"} , body:JSON.stringify(data)}).then(()=>
        {
            Navigate("/")
        })
    }

  return (
    <div className='addNewProduct'>
      <h1>Add new product here</h1>


      <form className='addProductForm' onSubmit={handleSubmit}>
        <div className="inputCont">
            <label htmlFor="prodName" id='labelTag'>Product Name<span id='requiredSpan'><sup>*</sup></span>:</label><br />
            <input type="text" placeholder='Enter product name' id='prodName' onChange={(e)=>{setProdName(e.target.value)}} />
        </div>


        <div className="inputCont">
        <label htmlFor="prodImg" id='labelTag'>Product Image<span id='requiredSpan'><sup>*</sup></span>:</label><br />
        <input type="url" placeholder='Paste product image' id='prodImg' onChange={(e)=>{setProdImage(e.target.value)}}/>
        </div>


        <div className="inputCont">
        <label htmlFor="prodPrice" id='labelTag'>Price<span id='requiredSpan'><sup>*</sup></span>:</label><br />
        <input type="number" placeholder='Enter the prize' id='prodPrice' onChange={(e)=>{setPrize(e.target.value)}}/>
        </div>

        <div className="buttonTag">
         <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default AddNewProduct
