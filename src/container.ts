import { Container } from "inversify";
// import { EmpresaService } from './services/empresa.service';
import {FooController} from "./controller"

export const container = new Container();

// set up bindings
container.bind<FooController>('FooService').to(FooController);

 