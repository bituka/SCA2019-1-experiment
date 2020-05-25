
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDLPayPO.PayPOModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDLPayPO.PayPOModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}