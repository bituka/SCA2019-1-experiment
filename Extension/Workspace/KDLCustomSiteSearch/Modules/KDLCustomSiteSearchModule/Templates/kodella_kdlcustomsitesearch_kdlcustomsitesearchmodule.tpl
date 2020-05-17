<section class="kdlcustomsitesearchmodule-info-card">
    <span class="kdlcustomsitesearchmodule-info-card-content">
      {{message}}
    </span>
</section>
<div class="o-feature-search">
  <h2>What are you looking for?</h2>
    <p>MROsupply is an online distributor of industrial, mechanical, conveyor, electrical and many other products, spanning millions of parts across thousands of suppliers.</p> 
  <form method="GET" action="/search" data-action="search" class="m-search-panel js-search-wrap site-search-content-form">
    <div class="a-autocomplete-inner">
      <!-- <meta itemprop="target" content="https://www.mrosupply.com/search/?q={q}">
      <i class="a-icon a-icon-search"></i>
      <input data-url="/autocomplete/" itemprop="query-input" name="q" placeholder="Enter part number, SKU or keyword" autocomplete="off" required="" class="a-input a-input--autocomplete js-search">
      <button class="a-btn a-btn-close js-autocomplete-close">
        <i class="a-icon a-icon-close"></i>
      </button> -->
      <div class="site-search-content-input">
          <div data-view="ItemsSeacher"></div>
      </div>
      <button class="a-btn a-btn-blue js-autocomplete-search">
        <span>Search</span>
      </button>
      <div class="m-search-dropdown"><div class="m-search-dropdown-i js-autocomplete-dropdown"></div></div>
    </div>
  </form>
  <div class="m-advantages">
    <div class="m-advantages--item">
      <i class="a-icon a-icon-car"></i>
      <span class="m-advantages--item-title">FREE SHIPPING</span>
      <span class="m-advantages--item-text">on most items</span>
    </div>
    <div class="m-advantages--item">
      <i class="a-icon a-icon-shield"></i>
      <span class="m-advantages--item-title">VERIFIED SUPPLIER</span>
      <span class="m-advantages--item-text">+200 brands +1MM SKU</span>
    </div>
  </div>
  </div>

<!-- <div class="site-search" data-type="site-search"> 
    <div class="site-search-content">
        <form class="site-search-content-form" method="GET" action="/search" data-action="search">
            <div class="site-search-content-input">
				<div data-view="ItemsSeacher"></div>
                <i class="site-search-input-icon"></i>
				<a class="site-search-input-reset" data-type="search-reset"><i class="site-search-input-reset-icon"></i></a>
            </div>
            <button class="site-search-button-submit" type="submit">{{translate 'Go'}}</button>
        </form>
    </div>
</div> -->



<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->