import express from 'express'
/* global process */
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
// use a safe check so this file works in environments without a global `process`
const PORT = (typeof process !== 'undefined' && process.env && process.env.PORT) ? Number(process.env.PORT) : 3000

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`)
})
