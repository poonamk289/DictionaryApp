import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from './../redux/actions/cartActions';

const Products = ({products})=>{
    console.log(products);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };
    
  
    return (
        <div className="product-div">

            {  products && products.map((product)=>(
                <div className="product">
                    <div>
                        <img src={product.images[0]} alt = "product-image"/>
                        <p>Title :  {product.title}</p>
                        <p>Price : ${product.price}</p>
                    </div>
                    <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                 </div>

            ))}
                
           </div>
    )
}

export default Products;