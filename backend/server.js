const express = require('express');
const app = express();
const port = 5000;

// middleware
const cors = require('cors');
app.use(express.json());
app.use(cors())







app.listen(port, () => { console.log('The backend is running in port ' + port)});