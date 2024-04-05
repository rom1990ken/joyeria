import { Request, Response } from "express";

const path:string = '../src/views/';

const jsonValidate = (response:Response, message:string,  exito:boolean = true ): void => {}

export default class IndexC {
    async welcome(request: Request, response: Response):Promise<void> {
        try {

            response.render(`${path}indexView`, {
                parameter : 'Rommel Antonio'
            });

        } catch (err) {
            response.status(500).json({
                message: "Internal Server Error!"
            });
            
        }

    }

    /*async miJson(request: Request, response: Response):Promise<void> {
        try{
            let respuesta 
        }catch(error){

        }finally{
            response.end();
        }
    }*/
}

/*export const welcome = (request: Request, response:Response):Response => {
    return response.json({ message: "Welcome to bezkoder application." });
}*/