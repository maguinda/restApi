const express = require('express');
const server = express();
const port = 3000;
const capture_payment = require('./Payments/Capture/capture-payment.js');

const user ={
	
    name:'wilmer',
    email:'wilmer@gmail.com'
};

const user1=Object.values(user);


server.get('/', (req, res) => {
	
	capture_payment(function (err, data) {
        res.send(data);
		console.log([data]);
        
	});
});

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});