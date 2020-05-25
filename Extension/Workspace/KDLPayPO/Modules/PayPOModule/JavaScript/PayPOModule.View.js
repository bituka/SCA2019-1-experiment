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
			'submit form': 'saveForm'
		}

	});
});