const { createServer } = require('vite')
const { resolve } = require('path')
console.log(__dirname)
;(async () => {
  const server = await createServer({
    root: resolve(__dirname, '../'),
    server: {
      port: 1337
    }
  })
  await server.listen()
  server.printUrls()
  console.log(server.config)
})()
