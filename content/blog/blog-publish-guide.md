---
title: Publish Your Blog
description: Different ways to publish your blog site.
tags: 
  - guide
  - netlify
---
This project aims to be a static site generator.  So basically you just generate the content using following command:

```sh
yarn generate
```

The generated content is located in _mysite/dist_. You can use whatever mechanism you have to upload to your website. 

If you would like to use a static site friendly hosting service, there are many options out there and most offers free plan for personal sites. So far I have only used Netlify.

## [Netlify](https://app.netlify.com/)
The setup is straightforward, please just follow _Netlify_'s own instruction.  The following are used to build content and publish

| Config 	| value 	|
|-	|-	|
| Base directory 	| leave blank 	|
| Build command 	| ln -s sample mysite && npm run generate 	|
| Publish directory 	| mysite/dist 	|