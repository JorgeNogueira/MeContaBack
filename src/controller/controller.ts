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
    requestParam,
    requestBody,
    BaseHttpController
} from "inversify-express-utils";
import { UserRepository, IUser } from '../entity';
// import { EmpresaService } from './services/empresa.service';

@controller("/user")
export class FooController extends BaseHttpController implements interfaces.Controller {

    constructor(
        // @inject("FooService") private empresaService: EmpresaService
    ) {
        super()
     }

    @httpGet("")
    private list(@queryParam("start") start: number, @queryParam("count") count: number) {
        return UserRepository().find()
    }
    
    @httpPost("")
    private async createUser(@requestBody() body: IUser) {
        return await UserRepository().insert({
            name: body.name,
            id: body.id,
        })
    }

}