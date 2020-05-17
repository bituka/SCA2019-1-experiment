
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}