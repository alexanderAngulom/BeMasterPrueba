
import { Router } from 'express';
import { getGitHubGoogleRank, nomenclatura,pensamientoL } from '../Controllers/beMasterControllers';

export const beMasterRoutes = Router();
/**
 * @swagger
 * /api/beMaster:
 *   get:
 *     summary: Consumo de APIs
 *     description: Crea una aplicación Node.js que consuma la API de GitHub y muestre los 10 repositorios más populares del usuario "google".
 *     responses:
 *       200:
 *         description: Éxito, devuelve los 10 repositorios mas populares del usuario "google"
 *       500:
 *         description: Error del servidor.
 */
beMasterRoutes.get('/beMaster', getGitHubGoogleRank);


/**
 * @swagger
 * /api/nomenclatura:
 *   post:
 *     summary: Nomenclatura de Altura
 *     description: Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor su función.
 *     requestBody:
 *         description: Datos para el cálculo de la nomenclatura de altura.
 *         required: true
 *         content:
 *             application/json:
 *                 schema:
 *                     type: object
 *                     properties:
 *                         anguloInicial: 
 *                             type: number
 *                             description: Altura en metros.
 *                         incremento: 
 *                             type: number
 *                             description: Peso en kilogramos.
 *                         factorDeAmplificacion:
 *                             type: number
 *                             description: Amplitud en metros.
 *     responses:
 *       200:
 *         description: Éxito, devuelve el valor que se desea calcular.
 *       500:
 *         description: Error del servidor.
 */

beMasterRoutes.post('/nomenclatura', nomenclatura);



/**
 * @swagger
 * /api/pensamiento:
 *   post:
 *     summary: Pensamiento lógico
 *     description: Escribe una función que tome un número entero como entrada y devuelva un array con todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].
 *     requestBody:
 *         description: Ingresa un numero entero para saber los impares hasta dicho numero.
 *         required: true
 *         content:
 *             application/json:
 *                 schema:
 *                     type: object
 *                     properties:
 *                         ingreseNumero: 
 *                             type: number
 *                             description: limite del array
 *     responses:
 *       200:
 *         description: Éxito, devuelve el arreglo con tope hasta dicho numero entrante.
 *       500:
 *         description: Error del servidor.
 */

beMasterRoutes.post('/pensamiento', pensamientoL);
