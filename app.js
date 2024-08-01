const express = require('express');

const app = express();
const PORT = 3000;

//route controller with a path paremeter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId}`);
});

app.get('/', (req, res) =>{
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server stard on port ${PORT}`);
});
