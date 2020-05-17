
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDLHomepageCatalog.KDLHomepageCatalog.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDLHomepageCatalog.KDLHomepageCatalog.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}