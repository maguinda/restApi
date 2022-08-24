const express = require('express');
const server = express();
const port = 3000;
const credit_using_bluefin_pci_p2pe_with_visa_platform_connect = require('./Payments/Credit/credit-using-bluefin-pci-p2pe-with-visa-platform-connect.js');




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
	
	credit_using_bluefin_pci_p2pe_with_visa_platform_connect(user1, function (err, data) {
        
		console.log(data);
		res.send(data);
        
	});
});

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

