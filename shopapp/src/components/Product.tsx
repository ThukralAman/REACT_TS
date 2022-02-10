import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import IProduct from "../model/IProduct";
import { Button } from "./Button";
import Cart from "./Cart";

const Product:React.FC<IProduct> = (product) => {
	let {id,name, image} = product;
	const {handleDetail} = useContext(ProductContext);
	const {addToCart} = useContext(CartContext);
	return (
		<div className="col-md-4 col-lg-3 my-2">
			<div className="card">
				<div className="img-container">
					<Link to={`/details/${id}`} className="link" onClick={() => handleDetail(id)}>
						<img src={image} alt={name} style={{'width':'100%', height:'200px'}}/>
					</Link>
					<Button className="cart-btn fa fa-cart-plus" onClick={() => addToCart(id)}/>
				</div>
			</div>
		</div>
	)
}

export default Product;