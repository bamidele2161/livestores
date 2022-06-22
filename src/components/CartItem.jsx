import React, { useEffect, useState } from 'react'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/stateProvider'
import { motion } from 'framer-motion'

let items = [];

const CartItem = ({item}) => {
    const [quantity, setquantity] = useState(1);
    const[items, setItems] = useState([])
    const [{cartItems},dispatch] = useStateValue()

    const cartDispatch = () => {
        localStorage.setItem('cartItems', JSON.stringify(items));
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        })
    }

    const updateQuantity = (action, id) => {
        if(action === "add") {
            setquantity(quantity + 1);
            cartItems.map((item) => {
                if(item.id === id) {
                    item.quantity += 1
                }
                
            });
            cartDispatch();
        
        }
        else{
            setquantity(quantity - 1);
            cartItems.map((item) => {
                if(item.id === id) {
                    item.quantity -= 1;
                }
            });
            cartDispatch();
        }

    }


    useEffect(() => {
        setItems(cartItems)
    },[quantity]);

  return (
    <div>
        <div key={item?.id} className='second-row'>
            <div className='clicked-item'>
                <div className='ima-name'>
                    <img src={item?.image} alt='' className='cart-img'/>
                    <p>{item?.name}</p>
                </div>
                <div className='add-sub'>
                    <p onClick={() =>  updateQuantity("remove", item?.id)}>-</p>
                    <p onClick={() =>  updateQuantity("add", item?.id)}>+</p>
                </div>
                <h3>#{parseFloat(item?.price * quantity)}</h3>
                
            </div>
        </div>

        
    </div>
  )
}

export default CartItem