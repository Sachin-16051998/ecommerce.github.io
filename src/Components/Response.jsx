import { Link } from "react-router-dom";
const Response = () => {
    return ( 
        <div className="response">
        <h1 align="center">Your Request has been Recorded Succesfully</h1>

        <Link to={"/"}><h2 align="center">Go to Products</h2></Link>
        </div>  
     );
}
 
export default Response;