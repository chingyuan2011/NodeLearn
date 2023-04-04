const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(
        `
        <head>
        </head>
        <body>
            <h1>hi~</h1>
        </body>
        `
    )
})

app.get('/user/:name/:date', (req, res) => {
    const { name, date } = req.params
    const { limit } = req.query
    res.send(
        `
        <head>
        </head>
        <body>
            <div>name: ${name}</div>
            <div>date: ${date}</div>
            <div>limit: ${limit}</div>
        </body>
        `
    )
})

const port = 3000
app.listen(port)