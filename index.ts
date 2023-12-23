import express from "express"
import multer from "multer"

const app = express()

const upload = multer({ dest: "uploads/" })

app.use(express.urlencoded({ extended: true }))

app.post("/", upload.single("foto"), (req, res) => {
  const file = req.file!

  res.send(`Hello ${file.originalname}`)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
