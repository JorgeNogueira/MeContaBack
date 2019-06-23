import { createConnection,
ConnectionOptions } from "typeorm";
import { User} from "../entity/index";
import { LoggerOptions } from 'typeorm/logger/LoggerOptions';

const connectionOptions: ConnectionOptions = {
    host: 'localhost',
    type: "mysql",
    port: 3306,
    username: 'root',
    password: 'zinukted$0',
    database: 'meConta',
    name: "default",
    synchronize: true,
    dropSchema: true,
    logging: "all",
    entities: [
        User,
    ]
}

export const dbConnFactory = () => createConnection(connectionOptions);