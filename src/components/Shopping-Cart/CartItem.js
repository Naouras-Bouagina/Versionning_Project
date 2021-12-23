import React from 'react';

export default class CartItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	render(){
		const { product } = this.props;
		return (
		
			<tr class="table_row">
			<td  class="column-1">
				<div class="how-itemcart1">
					<img src={`${product.Image}`} alt="IMG" />
				</div>
			</td>
			<td class="column-2">{product.Title}</td>
			<td  colspan="3" class="column-3">{product.Price} DT</td>
			<td colspan="3" class="column-4">{product.qty}
			</td>
			<td colspan="3" class="column-5">
			<button className="btn btn-danger float-right"  onClick={() => this.props.remove(product)}>Remove</button>

			</td>
		</tr>
		)
	}
}
