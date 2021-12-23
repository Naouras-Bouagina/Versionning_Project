import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

export default class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		if (this.props.product.available_quantity < qty) {
			cart[id] = this.props.product.available_quantity; 
		} else {
			cart[id] = qty
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	render(){
		const { product } = this.props;
		return (
			
			<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ marginLeft: "20px", marginBottom: "10px", marginRight: "40px"}}>
		    <div className="card" style={{ marginRight: "10px", marginLeft: "30px", width: "350px" , height: "400px"}}>
			  <div className="card-body">
			  <img src={`${product.Image}`} alt="IMG-PRODUCT" style={{marginLeft: "55px",marginBottom:"10px", width: "200px" , height: "200px"}}/>
			    <h4 className="card-title" style ={{marginBottom:"10px"}}>{product.Title}</h4>
			    <h5 className="card-text" style ={{marginBottom:"10px"}}><small>Price: </small>{product.Price} DT</h5>
			    <span className="card-text" style ={{marginBottom:"10px"}}><small>Available Quantity: </small>{product.available_quantity}</span>
			    
			    { product.available_quantity > 0 ?
			    	<div>
						<Link to="/login">
			    		<button className="btn btn-sm btn-warning float-right" onClick={this.addToCart}>Add to cart</button></Link>
			    		<input type="number" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
			    	</div> : 
			    	<p className="text-danger"> product is out of stock </p>
			 	}

			  </div>
			</div>
			</Col>
		)
	}
}
