const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req)
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

const port = 3000
app.listen(port)