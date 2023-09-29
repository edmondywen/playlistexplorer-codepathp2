import express from 'express'
import './config/dotenv.js'
// import dotenv from 'dotenv'
// dotenv.config({ path: "./.env"})
import giftsRouter from './routes/gifts.js'

const app = express();

// To serve static files, such as images, HTML pages, and JavaScript files, we need to set up the express.static built-in middleware function in Express. The general syntax is app.use(<insert middleware>).
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/gifts', giftsRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = process.env.PORT || 3001    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})