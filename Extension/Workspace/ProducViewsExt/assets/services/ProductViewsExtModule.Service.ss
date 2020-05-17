
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.ProducViewsExt.ProductViewsExtModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.ProducViewsExt.ProductViewsExtModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}