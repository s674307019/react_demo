const express = require('express')

const app = express()

const router = express.Router()

router.get('/',function (req, res, next) {
  req.url='/index.html'
  next()
})

app.use(router)

app.use(express.static('./build'))

const open=require('opn') // 启动成功打开网页
const port=3500 // 端口号
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  open(`http://localhost:${port}`)
  console.log(`Listening at http://localhost:${port}\n`)
})
