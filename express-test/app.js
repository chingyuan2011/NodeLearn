const express = require('express')
const app = express()
const user = require("./routes/user")

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

app.use('/user', user)


const port = 3000
app.listen(port)