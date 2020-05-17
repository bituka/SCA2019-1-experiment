
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.PDPAdditionalDescription.PDPAdditionalDescriptionModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.PDPAdditionalDescription.PDPAdditionalDescriptionModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}