
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')

app.use(cors())

app.use(express.json())

// As rotas devem sempre ficar abaixo do "express.json()".
app.use(routes)

app.listen(process.env.PORT || 3000, () => {
  console.log('🚀 Servidor rodando a todo vapor na porta 3000!!')
})
