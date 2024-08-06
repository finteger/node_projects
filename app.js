const express = require('express');
const app = express();

const PORT = 3000;

//Query Parameters
app.get('/', (req, res) =>{

    const id = req.query.id;
    const username = req.query.username;

    res.send(`User ID: ${id}.  Username: ${username}`);
});

app.get('/products/:id', (req, res) =>{

  const productId = req.params.id;

  const products = [
    {"id": 1, "name" : "Product A"},
    {"id": 2, "name" : "Product B"},
    {"id": 3, "name" : "Product C"},
  ]

  const product = products.find(product => product.id == parseInt(productId));

  res.send(`Product id: ${product.id}.  Product Name: ${product.name}`);


});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
