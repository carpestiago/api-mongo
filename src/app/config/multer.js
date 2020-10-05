const multer = require('multer');
const { extname } = require('path');
const path = require('path');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            return cb(null, req.toString('hex') + extname(file.originalname));
        }
    })

}