define('PayPO.Model'
, [
    'Backbone'
  , 'underscore'
  , 'Utils'
  ]
, function (
    Backbone
  , _
  , Utils
  )
{
  'use strict';

  function validateLength (value, name)
	{
		var max_length = 4000;

		if (value && value.length > max_length)
		{
			return _('$(0) must be at most $(1) characters').translate(name, max_length);
		}
	}

	//@method validateMessage. Validates message entered by the user. Checks length 0 < length <= 4000.
	function validateMessage (value, name)
	{
		/*jshint validthis:true */
		if (this.get('isNewCase')) 
		{
			if (!value)
			{
				return _('$(0) is required').translate(name);
			}

			return validateLength(value, name);
		}
	}

	function validateReply (value, name)
	{
		/*jshint validthis:true */
		if (!this.get('isNewCase') && !value && !this.get('isClosing'))
		{
			return _('$(0) is required').translate(name);	
		}
	}

  return Backbone.Model.extend({

    urlRoot: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/PayPOModule.Service.ss'))
  
  , validation:
    {

        email: {
            required: function (value, name, form)
            {
                return !!form.include_email;
            }
        ,    pattern: 'email'
        ,    msg: _('Please provide a valid email').translate()
		}
		
	,   phone:{
            required: true
        ,    msg: _('Please provide a your phone').translate()
		}
		
	,	name: {
			required: true
		,    msg: _('Please provide your name').translate()
		}
    }  

  });
});