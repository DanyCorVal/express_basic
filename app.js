//Usando objeto express
const express = require('express')

//App de express
const app = express()

//Puerto en que vamos a ver nuestra app
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/launchx', (req, res) => {
    res.send('Bievenidos a lauchx')
})

app.get('/explorersInNode', (req, res) => {
    const explorer = {name: 'Explorer', msg: 'Hello' }
    res.send(explorer)
})

app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})