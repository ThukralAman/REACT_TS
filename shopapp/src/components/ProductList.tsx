import {useContext} from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';

const ProductList = () => {
	const  {products} = useContext(ProductContext);
	return <div className="container">
		<div className="row">
			{
				products.map( product => <Product key={product.id} {...product}/>)
			}
		</div>
	</div>
}

export default ProductList;