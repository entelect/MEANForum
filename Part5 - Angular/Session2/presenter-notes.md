Bringing in some Build Tools
============================

Intro
-----

1. Why do we want build tools on our frontend?
    * Linting will help to detect errors earlier
    * Better client side performance through minification and bundling
    * Templating and compilation (eg environment configuration and sass)
2. What is Gulp?
    * Node based build tool
    * Plugin based, so it can be extended
    * Build configuration file is a Node file, so you can do anything you can do in Node

Live coding
-----------

1. Take last week's demo and shove it in a 'src' folder
    * Explain that we are isolating it so that we can have the information around how to build it, and the actual built version separate
2. Add a package.json with npm init. Add gulp and a placeholder gulpfile. Gulp hello world: Just copy src to dist.
3. Add separate tracks for js, tpl.html, css and index.html. Add jshint.
4. Templating of index.html and adding tests

Time to work on their own blog
------------------------------

Also, time for questions

Homework
--------

1. Look at the Angular Baboon seed project. https://github.com/entelect/angular-baboon. Specifically, look at how it has used gulp, and how the project is structured.
2. Read up on:
    * concatenation and why it's important (https://developer.yahoo.com/performance/rules.html#num_http=)
    * minification (javascript, html and css)
    * ng-annotate
    * Sass
    * Getting external frontend libraries using npm or bower
