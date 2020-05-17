
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDLFooterExtension.KDLFooterExtModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDLFooterExtension.KDLFooterExtModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}