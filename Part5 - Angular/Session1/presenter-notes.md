My First Angular App
====================

Intro
-----
1. What is Angular?
    * Frontend Javascript framework for making dynamic web applications
    * Single page web application framework
    * The app functions as a standalone component. Think of it as you would a phone app. Your email app might not be useful without its API, but you don't need to redownload the whole app when the API comes back online.
2. Why Angular?
    * Fairly widely used, so there is a lot of info out there
    * Gives you most of the pieces you need in one package
    * Designed with testing in mind
    * Getting familiar with one client side Javascript framework will make it easier to pick up others in the future (this isn't the time to get stuck in analysis paralysis)
3. Outline of the next few sessions
    * Session 1: A brief introduction to starting an Angular project
    * Session 2: Build tools to make your life easier. Also, briefly getting into testing.
    * Session 3: Creating your own directives in Angular
    * Session 4: Clean code and best practices

Live coding
-----------

1. Empty html and js file, with Angular and Bootstrap from CDNs.
    * Point out that just including the Angular script does nothing useful.
2. Create our first module to init Angular.
    * Point out that ng-app can go anywhere, but Angular only exists inside it.
    * Show the expression, and give an example using a string
3. Add a posts controller with a single var post, and show it on the screen.
    * Controller as syntax
    * The controller gets newed up
    * Show expressions binding to variables
    * Put controller in its own file
4. Change the single post to be an ng-repeated posts array.
    * Use the ng-repeat as an example of different scopes and their inheritance
5. Move the static posts array into a service.
    * Explain factory vs service vs provider
    * Factory would usually call service here, and would return a promise.
6. Add a new post controller, a form to capture a post, and an add function on the post service.
    * Use the same post api service
    * Point out that the new post gets to the controller by pass-by-reference magic, and in an actual system you would need to call get again before it would update.
    * Clear the form on save so that it is ready for reuse
7. Add validation to the form.
    * Remember novalidate to disable browser's validation
    * Explain how validation bubbles up from inputs to forms
    * You need to check the form validation state, otherwise it doesn't mean anything
    * Show how it adds valid / invalid classes for styling
8. Add ui router to the project and split the new post and view posts into two templates.
    * Point out needing to include it in your module declaration as a dependency
    * Highlight this as where providers are most useful (configuration of reusable modules like routing)
    * Show that number of files is growing quickly, and sorting them (eg by feature) is a good idea

Homework
--------

1. Do the Angular course on CodeSchool (http://angular.codeschool.com/)
2. Read up on
    * filters
    * other provider types, such as constant
    * $http service
    * ng-if, ng-show, ng-repeat, ng-options, ng-class
    * initialization functions using run and config
