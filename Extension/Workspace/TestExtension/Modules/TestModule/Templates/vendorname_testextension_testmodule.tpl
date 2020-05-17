{{#if showNavLinks}}
<section class="header-nav-links">
    <ul class="header-menu-secondary-nav">
         <!-- START: Custom Navigation Menu -->
        {{#each navLinks}}
            <li class="kdl-header-nav-menu">
                <a href="{{href}}">
                    <span>{{displaytext}}</span>
                </a>
            </div>
        {{/each}}
        <!-- END: Custom Navigation Menu -->
    </ul>
</section>
{{/if}}

