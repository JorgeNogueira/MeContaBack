import * as express from "express";
import {
    interfaces,
    controller,
    httpGet,
    httpPost,
    httpDelete,
    request,
    queryParam,
    response,
    requestParam
} from "inversify-express-utils";
import { injectable, inject } from "inversify";
// import { EmpresaService } from './services/empresa.service';

@controller("/empresa")
export class FooController implements interfaces.Controller {

    constructor(
        // @inject("FooService") private empresaService: EmpresaService
    ) { }

    // @httpGet("/app")
    // private index(req: express.Request, res: express.Response, next: express.NextFunction): string {
    //     return res.json({
    //         success: true,
    //         message: "HELLO WORLD",
    //     })
    // }

    @httpGet("/app")
    private list(@queryParam("start") start: number, @queryParam("count") count: number) {
        return {
            success: true,
            message: "HELLO WORLD",
        };
    }

    // @httpPost("/")
    // private async create(@request() req: express.Request, @response() res: express.Response) {
    //     try {
    //         await this.empresaService.create(req.body);
    //         res.sendStatus(201);
    //     } catch (err) {
    //         res.status(400).json({ error: err.message });
    //     }
    // }

    // @httpDelete("/:id")
    // private delete(@requestParam("id") id: string, @response() res: express.Response): Promise<void> {
    //     return this.empresaService.delete(id)
    //         .then(() => res.sendStatus(204))
    //         .catch((err: Error) => {
    //             res.status(400).json({ error: err.message });
    //         });
    // }
}