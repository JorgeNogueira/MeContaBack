import "reflect-metadata";
import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';


import * as http from "http";
import { getRouteInfo } from "inversify-express-utils";
import * as prettyjson from "prettyjson";

import { container } from "./src/container";

// declare metadata by @controller annotation
// import "./controllers/foo_controller";

// create server
const server = new InversifyExpressServer(container, null, {
  rootPath: "/",
});
server.setConfig((express) => {
  // add body parser
  express.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  express.use(bodyParser.json());

});

const app = server.build();


const PORT = 8081;

// create the http server
const httpServer = http.createServer(app);

httpServer.listen(PORT);

const routeInfo = getRouteInfo(container);


console.log(`apl-back-vpo running in port ${PORT}`);
console.log(prettyjson.render({ routes: routeInfo }));
