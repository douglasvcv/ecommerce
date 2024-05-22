import express from 'express'
const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(4000, ()=>console.log("Servidor iniciando: http://localhost:4000"))

