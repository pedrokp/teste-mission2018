import React from 'react'


function addToJson(props) { 
	
	const fs = require('browserify-fs');

	var products = {
		'product': [],
		/* 'name': props.name,
		'price': props.price, */
		'state': true
	};
	
	  products.product.push({ 'name': products.name, 'price': 450 });
	  products.product.push({ 'name': 'screenB', 'price': 650 });
	  products.product.push({ 'name': 'screenF', 'price': 1240 });
	  
	  // Converting the JSON string with JSON.stringify()
	  // then saving with localStorage in the name of session
	  localStorage.setItem('products', JSON.stringify(products));
	  
	  // Example of how to transform the String generated through 
	  // JSON.stringify() and saved in localStorage in JSON object again
	  var restoredSession = JSON.parse(localStorage.getItem('products'));
	  
	  // Now restoredSession variable contains the object that was saved
	  // in localStorage
	  console.log(restoredSession); 


	let data = JSON.stringify(products);
	fs.writeFile('products.json', data, (err) => {
		if (err) throw err; 
	console.log('success');
});
}

export default function AddProduct(props){
	return <div>
	<h2>Adicionar produtos:</h2>

	<form encType='json'>
	<h4>Nome: </h4>
	<input name='name' value={props.name} id='name' type='text'/>
	<h4>Valor: </h4>
	<input name='price' value={props.price} id='price' type='text' />
	<br />
	<button type='submit' id='submit' onClick={addToJson(props)}>Add</button>
	</form>
	</div>



}
