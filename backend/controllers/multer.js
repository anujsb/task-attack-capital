const multer = require('multer');

// Set up Multer storage options
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Initialize multer with storage config
const upload = multer({ storage: storage });

module.exports = upload;
