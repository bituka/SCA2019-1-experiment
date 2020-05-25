
function service(request, response)
{
	'use strict';
	try 
	{
		require('Garry.TestimonialExtension.TestimonialModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Garry.TestimonialExtension.TestimonialModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}