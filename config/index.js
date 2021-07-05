const title = 'Tailwind NuxtJs Starter Blog'
const description = 'A simple blog platform built on Nuxt, Tailwind'
const author = 'ooasis'
const baseUrl = 'https://tailwind-nuxtjs-starter-blog.netlify.app'

export default {
  title,
  author,
  identity: 'Programmer',
  location: 'Seattle, WA',
  avatar: '/img/ooasis.png',
  baseUrl,
  seo: {
    baseUrl,
    name: title,
    description,
    author: [author],
    keywords: ['nuxtjs', 'tailwind', 'starter', 'blog'],
  },
  feed: {
    category: 'technology',
  },
  social: {
    mail: 'donotemailme@ooasis.com',
    twitter: 'https://twitter.com/',
    facebook: 'https://facebook.com/',
  },
}
