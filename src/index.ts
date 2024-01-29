// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import { beMasterRoutes } from './Routes/beMaster';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';
import cors from 'cors'; // Importa el paquete cors

const app = express();
const port = process.env.PORT || 3030;

// Middleware
app.use(bodyParser.json());
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
// Routes
app.use('/api', beMasterRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Default route
app.get('/', (req, res) => {
  res.send('Bienvenido bMaster a la prueba de Alexander Angulo');
});

// Start the server
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});