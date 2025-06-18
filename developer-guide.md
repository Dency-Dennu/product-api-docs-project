# 🛠️ Developer Guide: Product API

## 📦 Prerequisites
- Node.js (v18+)
- npm

## 🚀 How to Start the API

```bash
npm install
node index.js
Visit: http://localhost:3000

## 🔁 API Endpoints
1. GET all products
curl http://localhost:3000/products

2. GET product by ID
curl http://localhost:3000/products/1

3. POST new product
curl -X POST http://localhost:3000/products \

  -H "Content-Type: application/json" \
  -d '{"name": "Table", "price": 250, "category": "Furniture"}'

4. PUT update product
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Laptop Pro", "price": 999, "category": "Electronics"}'

5. DELETE product
curl -X DELETE http://localhost:3000/products/1

## 
📘 API Documentation

You can access the Swagger-based documentation at:

🔗 http://localhost:3000/api-docs

