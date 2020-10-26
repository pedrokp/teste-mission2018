import React, { Component } from 'react'
import { Header, Form, Input, Button } from "semantic-ui-react";


class MyProductList extends Component {
	constructor(props) {
	  super(props);
      
	  this.state = {
		id: 0,
		name: "",
		price:"",
		product: [],
		productlist: []
	  };
	}

	// on load get the product list
	componentDidMount = () => {
	  this.getProducts();
	};
  
	guidGenerator = () => {
		var S4 = function() {
		   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}

	onChange = event => {
	  this.setState({
		[event.target.name]: event.target.value
	  });
	  this.setState({ id: this.guidGenerator() });
	  console.log(this.guidGenerator())
	};
  
	// add product to the list
	onSubmit = () => {
	  // check is product is empty string
	  if (this.state.product) {


		// get the product list from the local storage
		let productlist = JSON.parse(localStorage.getItem("productlist"));
  
		// product list is null means empty
		// create an empty list
		if (productlist == null) {
		  productlist = [];
		}
  
		// create product object
		// default status is false
		let product = {
		  id: `${this.state.id}`,
		  name: `${this.state.name}`,
		  price: `${this.state.price}`,
		};
		
		
		// add the product to the product list
		productlist.push(product);
  
		// save the product list in the local storage
		localStorage.setItem("productlist", JSON.stringify(productlist));
  
		// clear the form
		this.setState({ product: "" });
		window.location.reload();

		// refresh the products
		this.getProducts();
	}
	};
  
	// get all the products
	getProducts = () => {
	  // get the product list from the local storage
	  let productlist = JSON.parse(localStorage.getItem("productlist"));
  
	  // check if product list is empty
	  if (productlist) {

		// save the product list in the local storage
		localStorage.setItem("productlist", JSON.stringify(productlist));
  		
	  }
	};
  

	render() {
	  return (
		<div>
		  <div>
			<Header as="h1">
			  <div className="app-header">Cadastrar Produto</div>{" "}
			</Header>
		  </div>
		  <div className="app-form">
			<Form onSubmit={this.onSubmit}>
			  <Input
			    id={this.state.id}
				type="text"
				name="name"
				onChange={this.onChange}
				value={this.state.name}
				placeholder="Produto..."
			  />
			  <Input
				type="number"
				name="price"
				onChange={this.onChange}
				value={this.state.price}
				placeholder="Valor"
			  />
			  <Button
				placeholder="Cadastrar"
				onClick={this.onSubmit}
				content="Cadastrar"
				/>
			</Form>
		  </div>
		</div>
	  );
	}
  }
  
  export default MyProductList;