import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

import {Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";


const App=()=>{

    const [products,setProducts] = useState("");

    useEffect(()=>{
        async function fetchProducts(){
            try{
            const res = await axios.get("https://dummyjson.com/products")
            console.log(res.data.products);
            setProducts(res.data.products);
            
            }catch(e){
                console.log(e);
            }
        }

        fetchProducts();

    },[])

   console.log(products[0]);
    return(
        <div>
           <nav>
                <h3>Shopping Cart</h3>
                <div>
                    <Navbar/>
                   
                    
                </div>
           </nav>
            <h1>All Items</h1>
            <Routes>
                <Route path="/" element={<Products products={products}/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            
           
        </div>
    )
}

export default App;