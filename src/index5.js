const express = require('express');
const server = express();
const port = 3000;
const process_authorization_reversal = require('./Payments/Reversal/process-authorization-reversal.js');

const user ={
	
    name:'wilmer',
    email:'wilmer@gmail.com'
};

const user1=Object.values(user);


server.get('/', (req, res) => {
	
	process_authorization_reversal(function (err, data) {
        res.send(data);
		console.log([data]);
        
	});
});

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});