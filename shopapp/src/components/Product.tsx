import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import IProduct from "../model/IProduct";
import { Button } from "./Button";

const Product:React.FC<IProduct> = (product) => {
	let {id,name, image} = product;
	const {handleDetail} = useContext(ProductContext);
	return (
		<div className="col-md-4 col-lg-3 my-2">
			<div className="card">
				<div className="img-container">
					<Link to={`/details/${id}`} className="link" onClick={() => handleDetail(id)}>
						<img src={image} alt={name} style={{'width':'100%', height:'200px'}}/>
					</Link>
					<Button className="cart-btn fa fa-cart-plus"/>
				</div>
			</div>
		</div>
	)
}

export default Product;