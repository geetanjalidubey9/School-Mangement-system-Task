const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use('/api', schoolRoutes);

const PORT =3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
