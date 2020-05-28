// @module Kodella.KDLPayPO.PayPOModule
define('Kodella.KDLPayPO.PayPOModule.View'
,	[
		'kodella_kdlpaypo_paypomodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'	
	,	'Backbone.FormView'
	,	'PayPO.Model'
	
	]
,	function (
		kodella_kdlpaypo_paypomodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	,	BackboneFormView
	,	PayPOModel
	)
{
	'use strict';

	// @class Kodella.KDLPayPO.PayPOModule.View @extends Backbone.View
	
	return Backbone.View.extend({

		template: kodella_kdlpaypo_paypomodule_tpl

	, 	initialize: function initialize() {
			this.model = new PayPOModel();
			BackboneFormView.add(this);
		}

	,	bindings: {

			'[name="email"]': 'email'
		,	'[name="phone"]': 'phone'
		,	'[name="attachment"]': 'attachment'
		,	'[name="name"]': 'name'
		}

	, events: {
			//'submit form': 'saveForm'
			'submit form': 'submitData'

		}

		//TODO
	//, validateData: function validateData(){}

	, submitData:function submitData(e){

			e.preventDefault();
			// TODO
		//	this.validateData();

			var self = this;
	
			// Get form 
			var form = jQuery('#kdl-poform')[0];
	
			// Create an FormData object 
			var data = new FormData(form);
			console.log("DATA : ", data);

			
			// disabled the submit button
			jQuery(".a-btn-loader").prop("disabled", true);
	
			$.ajax({
				type: "POST",
				enctype: 'multipart/form-data',
				url: "services/PayPOModule.Service.ss",
				data: data,
				processData: false,
				contentType: false,
				beforeSend: function beforeSend() {},
				success: function (data) {
	
					jQuery("#output").text(data);
					console.log("SUCCESS : ", data);
					jQuery(".a-btn-loader").prop("disabled", false);
	
				},
				error: function (e) {
	
					jQuery("#output").text(e.responseText);
					console.log("ERROR : ", e);
					jQuery(".a-btn-loader").prop("disabled", false);
	
				} 
			});
    	}
	});
});
		
		