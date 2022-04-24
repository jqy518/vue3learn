const {createSSRApp} = require('vue')
const {renderToString } = require('vue/server-renderer')
const app = createSSRApp({
  data(){
    return {
      user:'JohnDoe'
    }
  },
  template:`<div>Current user is: {{ user }}</div>`
})

renderToString(app).then((res)=>console.log(res))