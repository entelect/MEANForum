My First Directive
==================

Intro
-----

1. We've used a few directives now, but what are they?
    * A reusable chunk of html and Javascript
    * The core way of binding Angular to the html view
2. How does Angular process directives
    * Compiling and linking

Live Coding
-----------

1. Copy end point of previous session
2. Add a directive that shows a single post
    * Shows a basic template with very little functionality except for binding a value and templating
    * Include the template on both pages, to demonstrate reuse
    * Show the template live updating while typing. Talk about Angular's dirty checking and updating the DOM when something has changed.
3. Add a published date to the posts. Create a custom datepicker directive (three dropdowns). Use a watcher somehow.
    * Point out that our datepicker only has one-way binding, unless we hook into the events from the model controller.
    * Put logging into one of the watchers to show it being called every time something interesting happens.
    * Point out that we leverage ngModelController for its existing validation.
    * Talk about the ngModelController parsing and formatting pipelines.


Homework
--------

1. Read up on:
    * The official documentation for directives (intuitively put in an article called $compile) (https://docs.angularjs.org/api/ng/service/$compile)
    * Scopes and digests (http://teropa.info/blog/2013/11/03/make-your-own-angular-part-1-scopes-and-digest.html)
    * JQLite
    * Adding analytics to your project (http://angulartics.github.io/)
    * How to test directives
