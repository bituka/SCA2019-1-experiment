<div class="content-layout">
	<div class="content-layout-i js-slide-layout">
	   <div class="o-register">
		  <div class="o-register-i">
			 <div class="o-register--section section-row">
				<form class="o-register--section-col" id="kdl-poform" enctype="multipart/form-data">
				   <div class="m-primary-box m-purchases-form m-save-info">
					  <div class="m-primary-box--title">
						 <h3>Submit Your Purchase Order</h3>
					  </div>
					  <div data-type="alert-placeholder"></div>

					  <input type="hidden" name="subject" value="PO Submission">
					  

					  <div class="m-primary-box--content">
						 <div class="m-save-info-i">
							<div class="m-purchases-form-i">

							   <div class="m-purchases-form--item required" data-validation="control-group" data-input="email">
								  <div class="m-purchases-form--item-i">
									 <div class="m-purchases-form--item-col">
										<p class="a-title">Email</p>
									 </div>
									 <div class="m-purchases-form--item-col case-new-form-controls">
										<div class="a-input-inner" data-validation="control">
										   <input name="email" class="a-input a-input-light " id="id_email" type="email" value="">
										</div>
									 </div>


									 <div class="m-purchases-form--item-col"></div>
								  </div>
							   </div>



							   <div data-validation="control-group" data-input="name" class="m-purchases-form--item required">
								  <div class="m-purchases-form--item-i">
									 <div class="m-purchases-form--item-col">
										<p class="a-title">Your name</p>
									 </div>
									 <div class="m-purchases-form--item-col">
										<div class="a-input-inner" data-validation="control">
										   <input name="name" class="a-input a-input-light " autocomplete="name" id="id_name" type="text" value="">
										</div>
									 </div>
									 <div class="m-purchases-form--item-col"></div>
								  </div>
							   </div>


							   <div class="m-purchases-form--item required" data-validation="control-group" data-input="phone">
								  <div class="m-purchases-form--item-i">
									 <div class="m-purchases-form--item-col">
										<p class="a-title">Phone</p>
									 </div>
									 <div class="m-purchases-form--item-col">
										<div class="a-input-inner" data-validation="control">
										   <input name="phone" class="a-input a-input-light " autocomplete="tel" id="id_phone" type="text" value="">
										</div>
									 </div>
									 <div class="m-purchases-form--item-col"></div>
								  </div>
							   </div>
							   <div class="m-purchases-form--item required">
								  <div class="m-purchases-form--item-i">
									 <div class="m-purchases-form--item-col">
										<p class="a-title">Purchase Order Document</p>
									 </div>
									 <div class="m-purchases-form--item-col" data-validation="control-group" data-input="attachment">
										<div class="m-uploader js-filewrapper" data-id="8">
										   <div class="a-input-inner a-field-grp" data-validation="control">
											  <input name="attachment" id="attachment" class="a-input a-input-eGrey" type="file">
											  <label class="a-input a-uploader-field a-input-eGrey" for="id_attachment">
												 <p><span data-placeholder="Your File">Your File</span></p>
											  </label>
											  <label class="a-btn a-btn-blue" for="id_attachment">
											  <span class="a-btn-text-start">CHOOSE FILE</span>
											  <span class="a-btn-text-progress">UPDATING…</span>
											  <i class="a-icon a-icon-check"></i>
											  </label>
										   </div>
										</div>
									 </div>
									 <div class="m-purchases-form--item-col"></div>
								  </div>
							   </div>
							</div>
							<div class="m-purchases-form--info">
							   <p class="a-title">Purchase orders will be responded within 24 hours.
								  If you are an existing customer, we will process order and provide confirmation.
								  If there is a leadtime, we will communicate with you normally.
							   </p>
							   <p class="a-title">
								  Or send purchase orders to <a href="mailto:po@mrosupply.com">po@mrosupply.com</a>
							   </p>
							</div>
						 </div>
					  </div>
				   </div>
				   <div class="m-primary-panel bot-panel">
					  <button class="a-btn a-btn-loader a-btn-blue primary-panel-btn-right a-btn-reg" type="submit">
						 <span>Submit</span>
						 <i class="a-spinner">
							<svg class="a-spinner-i" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
							   <circle class="sub-spinner" fill="none" style="opacity: 0.25; stroke: #ffffff" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
							   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
							</svg>
						 </i>
						 <i class="a-icon a-icon-arrow"></i>
					  </button>
				   </div>
				</form>
			 </div>
		  </div>
	   </div>
	</div>
 </div>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->