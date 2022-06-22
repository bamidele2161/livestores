import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTimesCircle } from 'react-icons/fa'
import { useStateValue } from "../context/stateProvider"
import { actionType } from "../context/reducer"
import CartItem from './CartItem'
import empty from './empty.svg'

const CartContainer = ({openCart}) => {
    const [{cartShow, cartItems }, dispatch] = useStateValue();
    const [tot, setTot] = useState(0);
    const [flag, setFlag] = useState(1)

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
          return accumulator = accumulator + item.price;
        }, 0);
        setTot(totalPrice);
      }, [tot, flag]);
    
      const clearCart = () => {
        dispatch({
          type: actionType.SET_CARTITEMS,
          cartItems: [],
        });
    
        localStorage.setItem("cartItems", JSON.stringify([]));
      };

  return (
        <motion.div 
                    initial={{opacity: 0, x: 200}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: 200}}
                    className='cart-item-container'>
                    <div className='cart-first-row'>
                        <h3 onClick={clearCart} className='clear'>Clear</h3>
                        <h3><strong>CART</strong></h3>
                        <motion.div
                            whileTap={{scale: 0.75}}
                            onClick={openCart} className='close-btn'
                        >
                            <FaTimesCircle  className='close-icon'/>
                        </motion.div>
                    </div>


                    {
                        cartItems && cartItems.length > 0 ? (
                            <div>
                                
                            {
                                cartItems && cartItems.map((item) => (
                                    <CartItem key={item.id} item={item} setFlag={setFlag}
                                    flag={flag}/>
                                ))
                            }
                    
                            <div className='third-row'>
                            
                                <h2>Total = #{tot}</h2>
                                <motion.button
                                    whileTap={{scale: 0.8}}
                                >
                                    Checkout
                                </motion.button>
                            </div>

                            </div>
                            
                        ) : (
                            <div className='empty-div'>
                                <p>Your Cart is Empty</p>
                                <img src={empty} alt='' />
                            </div>
                        )
                    }
                </motion.div>
  )
}

export default CartContainer