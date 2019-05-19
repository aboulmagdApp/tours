import pgPromise = require("pg-promise");

export const pgp = pgPromise();
const dbConf = {
    host: "localhost",
    port: 5432,
    database: "tourdb",
    user: "postgres",
    password: "Magd@App"
};

export const db = pgp(dbConf);