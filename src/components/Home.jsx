import React, {useState, useEffect} from 'react'
import { actionType } from '../context/reducer'
import { Data } from './data'
import { useStateValue } from '../context/stateProvider'

const Home = () => {
  const [items, setItems] = useState([])
  const [local, setLocal] = useState()
  const [{cartItems, drugItems}, dispatch] = useStateValue()

  const fetchData = () => {
    dispatch({
      type: actionType.SET_DRUG_ITEMS,
      drugItems: Data,
    })
    setLocal(Data)

  }

  useEffect(() => {
    fetchData()
  }, [])

  const addToCart = (item) => {
    dispatch({
        type: actionType.SET_CARTITEMS,
        cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
};

useEffect(() => {
  addToCart();
}, [items]);

  
  return (
    <div className="Home-container">
      <div className='card-container'>
        {
          drugItems?.map((item) => (
            <div className='card' key={item.id}>
              <div className='card-image'>
                <img src={item.image} alt='' />
              </div>

              <div className='card-description'>
                <h3 className='drug-name'>{item.name}</h3>
                <div className='sk-price'>
                  <p className='sku'>{item.sku}</p>
                  <p className='price'>#{item.price}</p>
                </div>
              </div>

              <div className='content'>
                <p className='drug-paragraph'><span><button className='add-to-cart' onClick={() => setItems([...cartItems, item])}>Add to Cart</button></span><br/>{item.description}</p>
              </div>

            </div>
            
          ))
        }
      </div>
    </div>
  )
}

export default Home