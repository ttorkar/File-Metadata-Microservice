bodyParser = require('body-parser')
express = require('express')
cors = require('cors')
multer = require('multer')
upload = multer({dest:"uploads/"})

app = module.exports = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/public'))

app.post("/upload", upload.single("file"), (req, res, next) => {
return res.json(req.file)
})

app.listen(3000, () => {
  console.log("200")
})
