{{#if showNavLinks}}
<section class="header-nav-links">
    <ul class="header-menu-secondary-nav">
         <!-- START: Custom Navigation Menu -->
         <btn class="a-btn a-btn-light js-categories-handler">
            <span>Categories</span>
            <i class="a-icon a-icon-arrow"></i>
            <i class="a-icon a-icon-close"></i>
            <i class="a-icon a-icon-burger"></i>
          </btn> 
        {{#each navLinks}}
            <li class="kdl-header-nav-menu">
                <a href="{{href}}">
                    <span>{{displaytext}}</span>
                </a>
            </li>
        {{/each}}
            <span class="kdl-paypo">
                <a href="{{payPoUrl}}" class="a-link kdl-header-nav-menu" rel="nofollow">{{payPodisplayText}}</a>
            </span>
        <!-- END: Custom Navigation Menu -->
    </ul>
</section>
{{/if}}

