<!-- <section class="case-new">
	<header class="case-new-header">
		<h2 class="case-new-title">{{pageHeader}}</h2>
	</header>

	<div class="case-new-alert-placeholder" data-type="alert-placeholder"></div>
	<small class="case-new-required">
		{{translate 'Required'}}<span class="case-new-form-required">*</span>
	</small>

	<form action="#" class="case-new-form" novalidate>
		<div class="case-new-form-controls-group" data-validation="control-group">
			<label class="case-new-form-label" for="title">
				{{translate 'Subject <small class="case-new-form-required">*</small>'}}
			</label>
			<div class="case-new-form-controls" data-validation="control">
				<input data-action="text" type="text" name="title" id="title" class="case-new-form-input" value="" maxlength="300"/>
			</div>
		</div> -->

		<!-- <div class="case-new-form-controls-group" data-validation="control-group">
			<label class="case-new-form-label" for="category">
				{{translate 'Type of inquiry'}}
			</label> 

			<div class="case-new-form-controls" data-validation="control">
				<select name="category" id="category" class="case-new-form-case-category">
					{{#each categories}}
						<option value="{{id}}">
							{{text}}
						</option>
					{{/each}}
				</select>
			</div>
		</div>
-->
		<!-- <div class="case-new-form-controls-group" data-validation="control-group">
			<label  class="case-new-form-label" for="message">
				{{translate 'Message <small class="case-new-form-required">*</small>'}}
			</label>
			<div class="case-new-form-controls" data-validation="control">
				<textarea name="message" id="message" class="case-new-form-textarea"></textarea>
			</div>
		</div>

		<div class="case-new-form-controls-group">
			<label class="case-new-form-label">
				<input data-action="include_email" type="checkbox" name="include_email" id="include_email" class="case-new-form-include-email"/>
				{{translate 'I want to use another email address for this case'}}
				
			</label>
		</div>

		<div class="collapse" data-collapse-content data-validation="control-group">
			<label for="email" class="case-new-form-label">
				{{translate 'Email <small class="case-new-form-required">*</small>'}}
			</label>
			<div class="case-new-form-controls" data-validation="control">
				<input type="email" autofocus name="email" id="email" placeholder="{{translate 'yourname@company.com'}}" data-case-email class="case-new-form-input" value="" disabled maxlength="300"/>
			</div>
		</div>

		<div class="case-new-form-controls-group">
			<button type="submit" class="case-new-button-submit">{{translate 'Submit'}}</button>
		</div>
	</form>
</section> -->

<div class="content-layout">
	<div class="content-layout-i js-slide-layout">
	   <div class="o-register">
		  <div class="o-register-i">
			 <div class="o-register--section section-row">
				<form class="o-register--section-col" enctype="multipart/form-data">
				   <div class="m-primary-box m-purchases-form m-save-info">
					  <div class="m-primary-box--title">
						 <h3>Submit Your Purchase Order</h3>
					  </div>
					  <div data-type="alert-placeholder"></div>

					  <input type="hidden" name="subject" value="PO Submission">
					  

					  <div class="m-primary-box--content">
						 <div class="m-save-info-i">
							<div class="m-purchases-form-i">
							   <div class="m-purchases-form--item required">
								  <div class="m-purchases-form--item-i">
									 <div class="m-purchases-form--item-col">
										<p class="a-title">Email</p>
									 </div>
									 <div class="m-purchases-form--item-col">
										<div class="a-input-inner">
										   <input name="email" class="a-input a-input-light " id="id_email" type="email" value="">
										</div>
									 </div>
									 <div class="m-purchases-form--item-col"></div>
								  </div>
							   </div>
							   <div class="m-purchases-form--item required">
								  <div class="m-purchases-form--item-i">
									 <div class="m-purchases-form--item-col">
										<p class="a-title">Your name</p>
									 </div>
									 <div class="m-purchases-form--item-col">
										<div class="a-input-inner">
										   <input name="name" class="a-input a-input-light " autocomplete="name" id="id_name" type="text" value="">
										</div>
									 </div>
									 <div class="m-purchases-form--item-col"></div>
								  </div>
							   </div>
							   <div class="m-purchases-form--item required">
								  <div class="m-purchases-form--item-i">
									 <div class="m-purchases-form--item-col">
										<p class="a-title">Phone</p>
									 </div>
									 <div class="m-purchases-form--item-col">
										<div class="a-input-inner">
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
									 <div class="m-purchases-form--item-col">
										<div class="m-uploader js-filewrapper" data-id="8">
										   <div class="a-input-inner a-field-grp">
											  <input name="attachment" id="id_attachment" class="a-input a-input-eGrey" type="file">
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