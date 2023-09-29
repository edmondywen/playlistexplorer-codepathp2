import { pool } from '../config/database.js'

async function getAlbums(req, res) {
    try {
        const getAlbumsQuery = `
            SELECT * FROM albums
        `
        const results = await pool.query(getAlbumsQuery)
        res.status(200).json(results.rows)
    }
    catch(err) {
        res.status(400).json( { error: err.message } )
    }
}

export default getAlbums