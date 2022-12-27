const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rentalRoutes = require('./routes/rentals');
const PORT = process.env.PORT || 3001;



app.use(bodyParser.json())
app.use('/api/v1/rentals', rentalRoutes);

app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT);
})