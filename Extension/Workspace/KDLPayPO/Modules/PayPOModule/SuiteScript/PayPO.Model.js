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
		
    	validation: {
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




			return JSON.stringify(data);


		//	console.log(JSON.stringify(ModelsInit.session));
		

			/* var newCaseRecord = nlapiCreateRecord('supportcase');

			this.validate(data);

			newCaseRecord.setFieldValue('company', nlapiGetUser() + '');
			data.subject && newCaseRecord.setFieldValue('title', Utils.sanitizeString(data.subject));
			data.name && newCaseRecord.setFieldValue('incomingmessage', Utils.sanitizeString('Name: ' + data.name));
			
			data.email && newCaseRecord.setFieldValue('email', data.email);
			data.phone && newCaseRecord.setFieldValue('phone', data.phone);
			
			return nlapiSubmitRecord(newCaseRecord); */

			//File upload

			// var entity = request.getParameter("entity")
			//var file = request.getFile("file")
			
			// set the folder where this file will be added. In this case, 10 is the internal ID
			// of the SuiteScripts folder in the NetSuite file cabinet
			//file.setFolder(10) 
		
			// Create file and upload it to the file cabinet.
			//var id = nlapiSubmitFile(file)
		
			// Attach file to case record
			// nlapiAttachRecord("file", id, "case", entity)

/* 
			// Attach to record
			var type = 'file';   // the record type for the record being attached 
			var id = 297;   // the internal ID of an existing jpeg in the File Cabinet
			var type2 = 'customer';   // the record type for the record being attached to
			var id2 = 406;  // this is the internal ID for the customer
			var attributes = null;  
			nlapiAttachRecord(type, id, type2, id2, attributes) 
 */



		}
		
	
	});
});