const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the directory where uploaded files will be saved
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Define the file name when saved on the server
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use(express.static('uploads'));

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  // Upload endpoint for handling file uploads
  res.json({ message: 'File uploaded successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
