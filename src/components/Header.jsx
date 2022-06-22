import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/stateProvider'
import { motion } from 'framer-motion';
import CartContainer from './CartContainer';

const Header = () => {
    const [cartItem, setCartItem] = useState(false)
    const [{cartShow, cartItems}, dispatch] = useStateValue()
    
    
    const openCart = () => {
        setCartItem(!cartItem)
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        })
    }
  return (
    <div className='navbar-container'>
        <h1 className='navbrand'>Live<span>S</span>tores</h1>
        
        <motion.div 
            whileTap={{scale: 0.8}}
            onClick={openCart} className='cart-div'>
            <FaShoppingCart className='cart-icon'/>
            {
                cartItems && cartItems.length > 0 && (
                    <div className='cart-num'>
                        <p>{cartItems.length}</p>
                    </div>
                )
            }

        </motion.div>

        {
            cartItem && (
                <CartContainer openCart={openCart}/>
            )
        }
    </div>
  )
}

export default Header