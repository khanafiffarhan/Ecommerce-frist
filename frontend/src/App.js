import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home';
import Productscreen from './pages/Productscreen';
import CartPage from './pages/CartPage';
import data from './data';
import './style.css'
import AddProduct from './CRUD/AddProduct';



const App = () => {
    const [cartArray, setstate] = useState(data.cart)
    const addToCart = (idd)=>{
        const check = cartArray.every(item =>{
            return item.id !== idd;
        })
        if(check){
            const carting = data.products.filter(product =>{
                return product.id === idd
            })
            setstate([...cartArray,...carting])
            console.log(carting)

        }
        else{
            alert("The prduct added")
        }
        
        


    }
    const dltCartItem = (idd)=>{
        if(cartArray.includes(idd)){
            const ar = cartArray.indexOf(idd);
            cartArray.splice(ar,1);
            setstate([...cartArray])

        }
    }

    
    return (
        <div>
            <Nav cartTotal = {cartArray.length} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:slug" element={<Productscreen addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage carts={cartArray} dltCartItem={dltCartItem} />} />
                <Route path="/addproduct" element={<AddProduct />} />
            </Routes>
            
            
        </div>
    )
}

export default App
