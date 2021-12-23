import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCartProducts } from '../../repository';
import CartItem from '../Shopping-Cart/CartItem';
import { isAuthenticated } from '../../repository';

export class ShopCart extends Component {
    constructor(props) {
		super(props);
		this.state = {
			products: [],
			total: 0
		}
	}
	logOut(){
		localStorage.removeItem('x-access-token');
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

	removeFromCart = (product) => {
		let products = this.state.products.filter((item) => item.id !== product.id);
		let cart = JSON.parse(localStorage.getItem('cart'));
		delete cart[product.id.toString()];
		localStorage.setItem('cart', JSON.stringify(cart));
		let total = this.state.total - (product.qty * product.Price) 
		this.setState({products, total});
	}

	clearCart = () => {
		localStorage.removeItem('cart');
		this.setState({products: []});
	}
    render() {
		const auth = isAuthenticated();
        const { products, total } =  this.state;
        return (
          
	<><div class="wrap-header-cart js-panel-cart">
                <div class="s-full js-hide-cart"></div>

               
            </div><div class="container">
                    <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <a href="index.html" class="stext-109 cl8 hov-cl1 trans-04">
                            Home
                            <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                        </a>

                        <span class="stext-109 cl4">
                            Shoping Cart
                        </span>
                    </div>
                </div>
				<form class="bg0 p-t-75 p-b-85">
					<div class="container">
						<div class="row">
						
							<div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
							<center><h1>Welcome To Your Cart</h1></center>
							<br></br>
								<div class="m-l-25 m-r--38 m-lr-0-xl">
								
									<div class="wrap-table-shopping-cart">
										<table class="table-shopping-cart">
											<tr class="table_head">
												<th colspan="2" class="column-1">Product</th>
												
												<th colspan="3" class="column-3">Price</th>
												
				
												<th  colspan="3" class="column-4">Quantity</th>
											
												<th  colspan="3" class="column-5">Action</th>
											</tr>
	
											{
				
				products.map((product, index) => 

				<CartItem product={product} remove={this.removeFromCart} key={index}/>)}
	
	
										</table>
									</div>
	
								</div>
							</div>
	
					
						</div>
					</div>
				</form>

               

                     <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
							<div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
								<h4 class="mtext-109 cl2 p-b-30">
									Cart Totals
								</h4>

							

								{ products.length ?
								<div class="flex-w flex-t p-t-27 p-b-33">
									<div class="size-208">
										<span class="mtext-101 cl2">
										Total Amount:
										</span>
									</div>

									<div class="size-209 p-t-1">
										<span class="mtext-110 cl2">
										
										{total} DT
										</span>
									</div>
								</div>
								: ''}
                            	{ !products.length ? <h3 className="text-warning">No Item On The Cart</h3>: ''}
								
							
								{ (auth) ? <Link  to="/checkout">
                                    <button class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                                        Proceed to Checkout
                                    </button>
									<br></br>
                                    </Link>: ''}
                               {
                                ( auth ) ? 
								( <a className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" style={{ color: 'white' }} href="/login" onClick={this.logOut}>Log out</a>) : 
                                
                                ( <Link className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" style={{ color: 'white' }} to="/login">Log in</Link> )
                               }
                                <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" style={{ color: 'white' , marginTop: "20px" }} onClick={this.clearCart} >Clear Cart</button>
			                 	<br/><br/> 
							</div>
						</div>
			 </>
		
                
		
        )
    }
}

export default ShopCart
