require('dotenv').config();
const express = require('express'); 
const multer = require('multer');
const path = require('path');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const mysql = require('mysql2/promise');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "musicplayer_db",
});

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        console.log('File:', file);
        console.log('Mimetype:', file.mimetype);
        
        const filetypes = /mp3|wav|jpg|jpeg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        
        if (mimetype && extname) {
            return cb(null, true);
        }

        cb(new Error('Error: File type not supported!'));
    },
});

app.get('/', (req, res) => {
    res.send('Welcome to the Music Player API');
});

app.get('/api/songs', asyncHandler(async (req, res) => {
    const [songs] = await pool.query('SELECT * FROM songs');
    res.json({ status: 'success', data: songs });
}));

app.post('/api/songs', upload.fields([{ name: 'song' }, { name: 'cover' }]), [
    body('title').notEmpty().withMessage('Title is required'),
    body('artist').notEmpty().withMessage('Artist is required'),
], asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ status: 'error', errors: errors.array() });
    }

    if (!req.files['song'] || req.files['song'].length === 0) {
        return res.status(400).json({ status: 'error', message: 'Song file is required.' });
    }

    const { title, artist } = req.body;
    const songPath = req.files['song'][0].path; 
    const coverPath = req.files['cover'] ? req.files['cover'][0].path : null; 

    console.log(`Received data: Title: ${title}, Artist: ${artist}, Song Path: ${songPath}, Cover Path: ${coverPath}`);

    try {
        const [result] = await pool.query('INSERT INTO songs (title, artist, path, cover_path) VALUES (?, ?, ?, ?)', [title, artist, songPath, coverPath]);
        res.status(201).json({ status: 'success', data: { id: result.insertId, title, artist, path: songPath, cover: coverPath } });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ 
            status: 'error', 
            message: 'Error saving the song to the database.', 
            error: error.message,
            code: error.code,
            sqlState: error.sqlState,
        });
    }
}));

app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(err.status || 500).json({ 
        status: 'error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined 
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
