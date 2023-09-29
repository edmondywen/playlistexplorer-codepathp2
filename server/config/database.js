import pg from 'pg'

console.log(process.env.PGDATABASE)
const config = {
    user: 'postgres',
    password: 'exoukw3Cp3EFaS5Q6ecn',
    host: 'containers-us-west-199.railway.app',
    port: 6699,
    database: 'railway'
}

export const pool = new pg.Pool(config)

