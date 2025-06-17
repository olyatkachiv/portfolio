const express = require("express")
const router = express.Router()
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/", router)
app.listen(5000, () => console.log("Server Running on port 5000"))

router.get("/health", (req, res) => {
  res.json({ status: "Server is running", timestamp: new Date().toISOString() })
})

router.get("/", (req, res) => {
  res.json({ message: "Portfolio API Server" })
})
