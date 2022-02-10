import React, {useState, useEffect, useContext} from "react";
import IProduct from "../model/IProduct";
import {useParams} from 'react-router-dom';
import { ProductContext } from "../context/ProductContext";

const Details = () => {
	let [product,setProduct] =  useState<IProduct | null>(null);
	// http://server/4?page=4&size=10
	let {id} = useParams();
	const {handleDetail} = useContext(ProductContext);

	useEffect(() => {
		let p = id && handleDetail(id);
		if(p) {
			setProduct(p);
		}
	});

	if(product != null) {
		return(
			<div className="container">
				<h1>Name : { product.name}</h1>
				<h2>Price: { product.price} </h2>
			</div>
		)
	} else 
	return <h1>Product doesn't exist</h1>
}

export default Details;