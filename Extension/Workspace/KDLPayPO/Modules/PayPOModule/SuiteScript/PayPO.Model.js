/*
	© 2019 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Case
define('PayPO.Model'
,	[
		'SC.Model'
	,	'SC.Models.Init'
	,	'Application'
	,	'Utils'
	,	'underscore'
	,	'Configuration'
	]
,	function (
		SCModel
	,	ModelsInit
	,	Application
	,	Utils
	,	_
	,	Configuration
	)
{
	'use strict';

	// @class Case.Model Defines the model used by the Case.Service.ss and Case.Fields.Service.ss services.
	// Handles fetching, creating and updating cases. @extends SCModel
	return SCModel.extend({
		configuration: Configuration.get('cases')
		
    ,	validation: {
			name: {required: true, msg: 'Name is required'}
		,	email: {required: true, msg: 'Email is required'}
		,	phone: {required: true, msg: 'Phone Number is required'}
	//	,	attachment: {required: true, msg: 'Attachment is required'}
	
		} 


		// @method create
		// Creates a new case record
		// @param {String} customerId
		// @param {Object} data
	, 	create: function (data)
		{
			console.log(JSON.stringify(data));
			console.log(nlapiGetUser());
		//	console.log(JSON.stringify(ModelsInit.session));
		

			var newCaseRecord = nlapiCreateRecord('supportcase');

			this.validate(data);


			/* if (session.isLoggedIn2()) {
				newCaseRecord.setFieldValue('company', nlapiGetUser() + '');
		  	} */
			
			newCaseRecord.setFieldValue('company', nlapiGetUser() + '');
			data.subject && newCaseRecord.setFieldValue('title', Utils.sanitizeString(data.subject));
			data.name && newCaseRecord.setFieldValue('incomingmessage', Utils.sanitizeString('Name: ' + data.name));
			
			data.email && newCaseRecord.setFieldValue('email', data.email);
			data.phone && newCaseRecord.setFieldValue('phone', data.phone);
			
			return nlapiSubmitRecord(newCaseRecord);
		}
		
	
	});
});