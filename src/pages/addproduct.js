import React from 'react'

function addToJson(props) {

	const fs = require('browserify-fs');

	let products = { id: props.id,
		name: props.name,
		price: props.price
	};
	
	let data = JSON.stringify(products);
	fs.writeFile('products.json', data, (err) => {
		if (err) throw err;
	console.log(products);
	console.log('success');
});
}

export default function AddProduct(props){
	return <div>
	<h2>Adicionar produtos:</h2>

	<form id='teste' encType='application/json'>
	<h4>Nome: </h4>
	<input name='props[name]' value={props.name} onChange={props.onChange} type='text'/>
	<h4>Valor: </h4>
	<input name='props[price]' value={props.price} onChange={props.onChange} type='text' />
	<br />
	<button onClick={addToJson(props)}>Add</button>
	</form>
	</div>
}