---
title: Getting Started
description: How to setup this project for your personal project.
tags: 
  - guide
---
I have only used this project on macOS(Big Sur), hopefully the steps described below will work for you as well.  If you are familiar with general Javascript development process, it should feel familiar.

* Clone the project (assume your choice of local directory is tnsb)

  ```bash
  git clone https://github.com/ooasis/tailwind-nuxtjs-starter-blog.git tnsb
  ```

* Create a new directory to host your content data
This directory should have following sub-directories.files created
  
  * config/index.js

    this is where all the site metadata go. The supported metadata can be found in this [reference](/blog/site-config-guide)

  * content/blog

    this is where you place your blog posts. The underlying implementation is based on [nuxt/content](https://content.nuxtjs.org/). So please refer to [Writing Content](https://content.nuxtjs.org/writing) section on how to use the Markdown for the blog. As of ___front matter___, the required ones are:

      * title
      * description
      * tags (a list)

  * content/other

    this is the place for some special pages. Currently two files are required:

      * home.md
      * about.md

  * static

    this is the place for static content, which includes but not limited to

      * robots.txt
      * favicon.ico

    \* you can store images here, but ideally you should use an image service (e.g. flickr.com).  I manage my content with git as well. Having a lot of images checked in git is not ideal.

* let Tailwind NuxtJs Starter Blog know when the content is

  This project looks for directory ___mysite___ for content.  What you need to do is to create a soft link ___mysite___ which points to the root of your content directory (Hint: before you create your own content directory, you can use this project's ___sample___ directory as demo)

  ```bash
  cd tnsb
  ln -s <your_content_directory> mysite
  ```

* to run a local instance which you can live view your editing

  ```bash
  yarn dev
  ```
  
  once service is up, you can view the site at:

  ```
  http://localhost:3000
  ```

* to generate content for static site, run

  ```bash
  yarn generate
  ```

  this command will generate the static files to ___mysite/dist___

