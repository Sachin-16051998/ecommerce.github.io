import {BrowserRouter , Routes , Route} from "react-router-dom"
import NavBar from "./Components/NavBar"
import AddNewProducts from "./Pages/AddNewProduct"
import Products from "./Pages/Products"
import Response from "./Components/Response"
const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/Response" element={<Response/>}/>
      <Route path="/addproducts" element={<AddNewProducts/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
