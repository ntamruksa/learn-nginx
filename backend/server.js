const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  res.json({
    message: 'Ahoy!',
    users: [{
      id: 1,
      name: 'Noodee Tamruksa'
    }, {
      id: 2,
      name: 'Momo Tamruksa'
    }]
  })
})

app.listen(4001, () => console.log('It\'s work!'))