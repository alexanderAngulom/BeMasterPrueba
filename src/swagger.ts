// src/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bienvenidos a prueba Alexander BeMaster',
      version: '1.0.0',
      description: 'API para resolver los puntos de Prueba BeMaster.',
    },
  },
  apis: ['./src/Routes/*.ts'], // Rutas que deseas incluir en la documentación (ajústalas según tus necesidades)
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;