const express = require('express');
const server = express();
const port = 3000;
const authorization_with_capturesale = require('./Payments/Payments/authorization-with-capturesale.js');

const user ={
	
    name:'wilmer',
    email:'wilmer@gmail.com'
};

const user1=Object.values(user);


server.get('/', (req, res) => {
	
	authorization_with_capturesale(function (err, data) {
        res.send(data);
		console.log([data]);
        
	});
});

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});