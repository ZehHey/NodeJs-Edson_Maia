const express = require('express')
const app = express()
const port = 3000

// criar rota raiz
app.get('/', (req, res)=>{
    res.send('Olá Mundo!')
})

//Escutar a porta
app.listen(port,()=>{
    console.log(`Servidor Rodando no endereço http://localhost:${port}`)
})
