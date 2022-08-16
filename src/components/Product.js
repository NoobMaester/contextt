import { Cart } from "../Context";
import { useContext } from "react";

const Product = ({prod}) => {


  const { cart, setCart } = useContext(Cart);

  return (
    <div className="product">
        <img src={prod.image} alt={prod.name} />
        <div className="desc">
            <h3>{prod.name}</h3>
            <h3>{prod.price}</h3>
        </div>

        {cart.includes(prod) ? (
            <button className="remove" onClick={() => {setCart(cart.filter(c => c.id !== prod.id))}}>Remove to Cart</button>
        ) : (
            <button className="add" onClick={() => {
                setCart([...cart, prod]);
            }}>Add to Cart</button>
        )}

        

    </div>
  )
}

export default Product