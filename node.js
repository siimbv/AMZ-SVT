const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Save the file in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});
