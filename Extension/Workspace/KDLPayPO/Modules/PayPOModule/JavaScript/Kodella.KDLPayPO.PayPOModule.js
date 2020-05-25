
define(
	'Kodella.KDLPayPO.PayPOModule'
,   [
		'Kodella.KDLPayPO.PayPOModule.View'
	,	'PayPO.Router'	
	]
,   function (
		PayPOModuleView
	,	PayPORouter
	)
{
	'use strict';
//	console.log('router');
	return  {
		mountToApp: function mountToApp (container)
		{
			return new PayPORouter(container);
		}
	};
});
