const express = require('express');
const server = express();
const port = 3000;
const credit = require('./Payments/Credit/credit.js');




const orderInformationBillTo ={
	firstName : 'John',
    lastName : 'Deo',
    address1 : '201 S. Division St.',
	locality : 'Ann Arbor',
	administrativeArea : 'MI',
	postalCode : '48104-2201',
	country : 'US',
	email : 'test@cybs.com',
	phoneNumber : '999999999',
};

const user1=Object.values(orderInformationBillTo);


server.get('/', (req, res) => {
	
	credit( function (err, data) {
        
		console.log(data);
		res.send(data);
        
	});
});

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

