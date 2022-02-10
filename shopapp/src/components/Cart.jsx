import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";

const Cart = () => {
	let {cart} = useContext(CartContext);
	return <div className="container">
		{
			cart.length === 0 ? <h1>No items!!!</h1> :
			cart.map(product => <CartList key ={product.id} product={product} />)
		}
	</div>
}

export default Cart;