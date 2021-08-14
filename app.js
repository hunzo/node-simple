const ex = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config()

const app = ex()
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.json({
        host_name: process.env.HOSTNAME,
        headers: req.headers,
    })
})

app.listen(process.env.PORT || 3000)
