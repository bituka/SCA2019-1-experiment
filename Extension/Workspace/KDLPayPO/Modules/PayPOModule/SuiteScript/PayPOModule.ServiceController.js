
define(
	'Kodella.KDLPayPO.PayPOModule.ServiceController'
,	[
		'ServiceController'
	,	'PayPO.Model'
	]
,	function(
		ServiceController
	,	PayPOModel
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'Kodella.KDLPayPO.PayPOModule.ServiceController'

			// The values in this object are the validation needed for the current service.
		,	options: {
				common: {
				}
			}

		,	get: function get()
			{
				return 'Hello World I\'m an Extension using a Service!';
			}

		,	post: function post()
			{
				/* console.log('PO Service');
				var new_case_id = PayPOModel.create(nlapiGetUser() + '',this.data);
				return PayPOModel.get(new_case_id); */

				return PayPOModel.create(this.data);
			}

		,	put: function put()
			{
				// not implemented
			}
			
		,	delete: function()
			{
				// not implemented
			}
		});
	}
);