const express = require('express');
const server = express();
const port = 3000;
const create_and_send_invoice_immediately = require('./Invoicing/Invoices/create-and-send-invoice-immediately.js');

const user ={
	
    name:'wilmer',
    email:'wilmer@gmail.com'
};

const user1=Object.values(user);


server.get('/', (req, res) => {
	
	create_and_send_invoice_immediately(user1, function (err, data) {
        res.send(data);
		console.log(data);
        
	});
});

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

