const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const APP_ROUTES = [{
  page: 'index',
  pattern: '/'
}, {
  page: 'about',
  pattern: '/about'
},,
  {
    page: 'login',
    pattern: '/login'
  },
  {
    page: 'categories/',
    pattern: '/categories/:category'
  },
  {
    page: 'subcategories/',
    pattern: '/categories/:category/:subcategory'
  }
]

APP_ROUTES.forEach(route => routes.add(route))
