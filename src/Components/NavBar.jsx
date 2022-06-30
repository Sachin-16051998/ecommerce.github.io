import React from 'react'
import "./NavBar.css"
import {NavLink} from "react-router-dom"
const NavBar = () => 
{

  let stylesheet = ({isActive})=>
    {
        return{
            color:isActive?"white":"gray",
            fontWeight:isActive?"bold":"normal"
        }
    }

  return (
    <nav>
        <h1>e-commerce</h1>
        <div className="links">
            <NavLink style={stylesheet} to="/">Products</NavLink>
            <NavLink style={stylesheet} to="/addproducts">Add new product</NavLink>
        </div>
    </nav>
  )
}

export default NavBar
