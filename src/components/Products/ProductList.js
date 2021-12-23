import React from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../../repository';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

export default class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			toutProduct:[],
		}
	}

	componentWillMount() {
		getProducts().then((products) => {
	      this.setState({ products });
	    });

		getProducts().then((toutProduct) => {
			this.setState({ toutProduct });
		  });
	}

	render() {
		const { products } =  this.state;
		const { toutProduct } =  this.state;
		return (
			<div className=" container">
				
				<div className="flex-w flex-sb-m p-b-52">
                    <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" 
							onClick={()=>  this.setState({ toutProduct: products}) }
						>
                            All Products
                        </button>
    
                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" 
							onClick={()=>  this.setState({ toutProduct: products.filter(product =>  product.categorie === "women") }) }
						>
                            Women
                        </button>
    
                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" 
						onClick={()=>  this.setState({ toutProduct: products.filter(product =>  product.categorie === "men") }) }
						>
                            Men
                        </button>
    
                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
						onClick={()=>  this.setState({ toutProduct: products.filter(product =>  product.categorie === "acc") }) }
						>
                            Accesories
                        </button>
    
                      
    
                       
                    </div>
    
                 
					<div class="flex-w flex-c-m m-tb-10">
					<Link to="/checkout">
					<div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
				
						Checkout
					</div>
					</Link>
                    <Link to="/Shopcart">
					<div class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
						
						View Cart
		
					</div>
					</Link>
				</div>
				
			
			
                </div>


				<div className="row">
				<Row>
					{
					toutProduct.map((product, index) => <ProductItem product={product} key={index}/>)
					}
					
				</Row>
				</div>

				<br/>
				
				
			</div>
		);
	}
}
