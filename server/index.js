
const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')
const helmet = require('helmet')

const routes = require('../routes')

const port = parseInt(process.env.PORT, 10) || 3100
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(helmet())
  server.use(compression())

  const staticPath = path.join(__dirname, '../static')
  server.use('/static', express.static(staticPath, {
    maxAge: '30d',
    immutable: true
  }))

  server.get('/categories/:category', (req, res) => {
    const actualPage = '/categories'
    const queryParams = { category: req.params.category, subcategory: req.params.subcategory }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/categories/:category/:subcategory', (req, res) => {
    const actualPage = '/categories'
    const queryParams = { category: req.params.category, subcategory: req.params.subcategory }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/profile/:username/', (req, res) => {
    const actualPage = '/profile'
    const queryParams = { username: req.params.username}
    app.render(req, res, actualPage, queryParams)
  })
 
  server.get('*', (req, res) => {
    return handler(req, res)
  })

  startServer()

  function startServer () {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  }
})
