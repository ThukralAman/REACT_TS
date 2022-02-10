import { Button } from "./Button";

const CartList = (props) => {
	let {id, name, image, price, qty, amount} = props.product;

	return <div className="row">
		<div className="col-md-2">
			<img src={image} style={{"width": "50px", height:"50px"} } />
		</div>
		<div className="col-md-2">
			{name}
		</div>
		<div className="col-md-2">
			<Button>+</Button>
			<Button>-</Button>
		</div>
		<div className="col-md-2">
			Price: {price}
		</div>
		<div className="col-md-2">
			Qty: {qty}
		</div>
		<div className="col-md-2">
			Amount: {amount}
		</div>
		
	</div>
}

export default CartList;