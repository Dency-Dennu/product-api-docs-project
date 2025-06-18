const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let products = require('./products.json');

app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
});

// ...your product routes


// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  product ? res.json(product) : res.status(404).send({ error: 'Product not found' });
});

// POST new product
app.post('/products', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
app.put('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    products[index] = { id: Number(req.params.id), ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).send({ error: 'Product not found' });
  }
});

// DELETE product
app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    const deleted = products.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).send({ error: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
