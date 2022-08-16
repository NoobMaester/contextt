import {useState, useEffect, useContext} from 'react'
import Product from './Product';
import { Cart } from '../Context';

const CartPage = () => {

  const { cart} = useContext(Cart);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price), 0));
  }, [cart])
  
  return (
    <div>
      <span style = {{fontSize: 30}}>My Cart</span>
      <br />

      <span>Total: {total}</span>
      <div className='container'>
        {cart.map((prod) => (
          <Product prod = {prod} key = {prod.id}/>
        ))}
      </div>
    </div>
  )
}

export default CartPage;