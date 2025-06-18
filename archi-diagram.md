## 🗺️ API Architecture Diagram

```mermaid
flowchart TD
    A[Client (Browser or Postman)]
    A -->|GET / POST / PUT / DELETE| B[Express.js REST API]
    B --> C[products.json file]
    B -->|/api-docs| D[Swagger UI]
```
