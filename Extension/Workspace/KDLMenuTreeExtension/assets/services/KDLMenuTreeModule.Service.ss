
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDLMenuTreeExtension.KDLMenuTreeModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDLMenuTreeExtension.KDLMenuTreeModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}