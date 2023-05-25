import { useContext } from "react";
import ProductCard from "../Catalogue/ProductCard";
import wishlistContext from "../../context/wishlist.context";


function Wishlist(){

    const {wishlist} = useContext(wishlistContext);
    
    return(
        <div>
           {
            wishlist.map((product)=>{
                return <ProductCard product={product}/>
            })
           }
        </div>
    )
}

export default Wishlist;