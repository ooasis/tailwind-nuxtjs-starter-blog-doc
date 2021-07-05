---
title: Write Your Blog
description: Different ways to auth your blog.
tags: 
  - guide
  - forestry
---
Most time I just fire up VS Code and start writing there. VS Code provides Markdown preview mode which does pretty good job.  If necessary, you can just start the local dev server (yarn dev) to review the site.

## [Forestry](https://app.forestry.io/)
If you host your content in __git__ and would like to use a platform which also manages the git, you may try Forestry. 

___Forestry___ provides free plan for personal project. The sign up and setup process is mostly smooth except for the configuration of the _Preview_.  After some struggling, I finally figured out following configuration:

```json [package.json]
  "scripts": {
    "forestry-preview": "nuxt -p 8080 -H 0.0.0.0",
  },
```

```yml [.forestry/settings.yml]
build:
  preview_output_directory: ".nuxt"
  install_dependencies_command: yarn install
  preview_docker_image: forestryio/node:12
  mount_path: "/srv"
  working_dir: "/srv"
  instant_preview_command: yarn forestry-preview
```