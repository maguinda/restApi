const express = require('express');
const server = express();
const port = 3000;
const get_invoice_details = require('./Invoicing/Invoices/get-invoice-details.js');

//const user ={
//	id:'1124854',
//    name:'wilmer',
//    email:'wilmer@gmail.com'
//};

//const user1=Object.values(user);


server.get('/', (req, res) => {
	
	get_invoice_details( function (err, data) {
        
		console.log(data);
		res.send(data);
        
	}, '1124854');
});

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

