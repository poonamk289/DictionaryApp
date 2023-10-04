import React, { useState } from "react";


import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart ,clearCart} from './../redux/actions/cartActions';

const Cart =()=>{
    // const [total,setTotal] =useState(0);
    const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log(cartItems);
    const val = cartItems.map((item)=>item.price);
    // console.log(val);
    const total = val.reduce((total, amount) => {return total + amount},0); 
    // console.log(total);
    // if(total1){
    //     setTotal(total1);
    // }

    // const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
  
    const handleRemoveFromCart = (itemId) => {
      dispatch(removeFromCart(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
      };

      
    return (
        <div className="product-cart">

            <div >
                <h2>Cart</h2>
                <div className="cart-div">
            
                    {  cartItems && cartItems.map((item)=>(
                        <div className="product">
                            <div>
                                <img src={item.images[0]} alt = "product-image"/>
                                <p>Title :  {item.title}</p>
                                <p>Price : ${item.price}</p>
                            </div>
                            <button onClick={() => handleRemoveFromCart(item.id)} >Remove</button>
                        </div>

                    ))}

                    { total===0 && (
                        <div ><h1>0 item in cart</h1></div>
                    )}
                    
                </div>
                
            
            </div>
            <div className="price-list">
                <div></div>
                <h2>Checkout List</h2>
                <table>
                    <tr><th>Title</th><th>Price</th></tr>
                    {cartItems && cartItems.map((item)=>(
                        <tr>
                                <td> {item.title}</td>
                                <td><b>:&nbsp;&nbsp;&nbsp;&nbsp;${item.price}</b></td>
                        </tr>
                    ))}

                    <tr style={{borderTop:"1px solid white",marginTop:"20px"}}>
                        <td><h3>Total Price </h3></td>
                        <td>
                          <b>:&nbsp;&nbsp;&nbsp;&nbsp;${total}</b> 
                        </td>
                    </tr>
                   
                </table>

                <button onClick={handleClearCart}>Click to Checkout</button>
            </div>
        </div>
    )
}

export default Cart;