
function service(request, response)
{
	'use strict';
	try 
	{
		require('VendorName.TestExtension.TestModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('VendorName.TestExtension.TestModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}