import { Request, Response } from 'express';
import axios from 'axios';
import { Repository } from '../Models/repository'

export const getGitHubGoogleRank = async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://api.github.com/users/google/repos', {
            params: {
                sort: 'stars',
                per_page: 10
            }
        });
        const topRepositories: Repository[] = response.data.map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            url: repo.html_url
        }));

        return res.json({ status: 200, message: topRepositories });
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
}

export const nomenclatura = async (req: Request, res: Response) => {
    try {
        const response = { status: 400, message: "error", resultado: 0 };
        const anguloInicial = req.body.anguloInicial==0?response.message=`la variable anguloInicial debe ser mayor que cero (0)`:req.body.anguloInicial;
        const incremento = req.body.incremento==0?response.message=`la variable incremento debe ser mayor que cero (0)`:req.body.incremento;
        const factorDeAmplificacion = req.body.factorDeAmplificacion==0?response.message=`la variable factorDeAmplificacion debe ser mayor que cero (0)`:req.body.factorDeAmplificacion;
        const resultado = await f(anguloInicial, incremento, factorDeAmplificacion)
        //console.log("nomenclatura", resultado);
        console.log(resultado);
        
        resultado ? (
            response.status = 200,
            response.message = `Se ha cambiado la vairable "x" por anguloInicial, la vairable "y" por incremento, y la vairable "z" por factorDeAmplificacion, para reflejar mejor la función de estas variables en el contexto de la función f.`,
            response.resultado = resultado) : resultado;
        return res.json(response);
    } catch (error) {
        console.error('Error:', error);

    }
}


export const pensamientoL = async (req: Request, res: Response) => {

    try {
        const response = { status: 400, message: "error", resultado: [0] };
       const numeroIngresado= req.body.ingreseNumero==0?response.message=`la variable numeroIngresado debe ser mayor que cero (0)`:req.body.ingreseNumero;
     //   console.log("pensamientoL",numeroIngresado);
        const resultado=await numerosImpares(numeroIngresado);
        resultado.length!=0?(response.status=201,response.resultado=resultado,response.message="Ok"):response;
        return res.json(response)

    } catch (error) {

    }
}


async function f(anguloInicial: any, incremento: any, factorDeAmplificacion: any) {
    let a = anguloInicial + incremento;
    let b = a * factorDeAmplificacion;
    let c = Math.sin(b);
    return c;
}
async function numerosImpares(numero: any): Promise<number[]> {
    // Inicializamos un array vacío para almacenar los números impares.
    let impares: number[] = [];

    // Iteramos desde 1 hasta el número de entrada.
    for (let i = 1; i <= numero; i++) {
        // Verificamos si el número actual es impar.
        if (i % 2 !== 0) {
            // Si es impar, lo agregamos al array.
            impares.push(i);
        }
    }

    // Devolvemos el array con los números impares.
    return impares;
}