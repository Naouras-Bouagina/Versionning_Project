import React, { Component } from 'react'
import { getProducts } from '../../repository';
import ProductItem from '../Products/ProductItem';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

export class Product extends Component {

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
    render() {
        const { products } = this.state;
        const { toutProduct } =  this.state;
     
        return (

            <section className="bg0 p-t-23 p-b-140">
            <div className="container">
                <div className="p-b-10">
                    <h3 className="ltext-103 cl5">
                        Product Overview
                    </h3>
                </div>
    
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
                <div className="row">
				<Row>
					{
					toutProduct.map((product, index) => <ProductItem product={product} key={index}/>)
					}
					
				</Row>
				</div>
                
               
            </div>
        </section>
    
        )
    }
}

export default Product
