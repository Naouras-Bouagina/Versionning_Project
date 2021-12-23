import React from 'react';
import { isAuthenticated, getCartProducts } from '../repository';
import {  Navigate, Link } from 'react-router-dom';

export default class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			total: 0
		}
	}

	componentWillMount() {
		let cart = localStorage.getItem('cart');
		if (!cart) return; 
		getCartProducts(cart).then((products) => {
			let total = 0;
			for (var i = 0; i < products.length; i++) {
				total += products[i].Price * products[i].qty;
			}
	    	this.setState({ products, total });
	    });
	}

	render() {
		if (!isAuthenticated()) return (<Navigate to="/login" />);
		const { products, total } =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">Checkout</h3>
				<hr/>
				{
					products.map((product, index) => 
						<div key={index}>
							<p>
							<img src={`${product.Image}`} alt="IMG-PRODUCT" style={{ width: "200px" , height: "200px"}}/>  
							<h4 className="card-title">{product.Title}</h4>
								<small> (quantity: {product.qty})</small>
								<span className="float-right">{product.qty * product.Price}DT</span>
							</p><hr/>
						</div>
					)
				}
				<hr/>
				{ products.length ? <div><h4><small>Total Amount:</small><span style={{ color: "black" }} className="float-right">{total} DT</span></h4><hr/></div>: ''}
				{ !products.length ? <h3 className="text-warning">No item on the cart</h3>: ''}
				{ products.length ? <button className="btn btn-success float-right" onClick={() => alert('Proceed to Pay')}>Payer</button>: '' }
				<Link to="/Shopcart"><button className="btn btn-danger float-right" style={{ marginRight: "10px" }}>Back</button></Link>
				<br/><br/><br/>
			</div>
		);
	}
}
