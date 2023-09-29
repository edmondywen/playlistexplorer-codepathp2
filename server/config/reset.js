import { pool } from 'database.js'
import './dotenv.js'
import { albumData } from '../data/gifts.js'

async function createAlbumTable(){
    const createTableQuery = `
    DROP TABLE IF EXISTS albums;

    CREATE TABLE IF NOT EXISTS albums (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        artist VARCHAR(10) NOT NULL,
        genre VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )
    ` 
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 gifts table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating gifts table', err)
    }
}

async function seedAlbumTable(){
    await createAlbumTable()
    albumData.forEach((album) => {
        const insertQuery = {
            text: 'INSERT INTO gifts (name, artist, genre, image, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6)'
        }
        const values = [
            album.name, 
            album.artist, 
            album.genre, 
            album.image, 
            album.submittedBy,
            album.submittedOn
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('error inserting album')
                return 
            }
            console.log(`${album.name} inserted successfully`)
        })
    })
}

seedAlbumTable()