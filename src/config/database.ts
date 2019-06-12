import {createConnection, Connection} from "typeorm";

const connection = await createConnection({
    host: 'sql157.main-hosting.eu',
    type: "mysql",
    port: 3306,
    username: 'u159087763_mecon',
    password: 'zVMjhZWw5FeV',
    database: 'meConta',
});