const express = require('express');
const app = express();

const PORT = 3000;


app.use(express.static('public'));

//middleware
app.use((req, res, next)=>{
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

//router controller
app.get('/', (req, res) =>{
  res.send(`Hello World!`);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
