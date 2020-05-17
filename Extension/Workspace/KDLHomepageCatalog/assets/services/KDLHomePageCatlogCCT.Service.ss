
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDLHomepageCatalog.KDLHomePageCatlogCCT.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDLHomepageCatalog.KDLHomePageCatlogCCT.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}