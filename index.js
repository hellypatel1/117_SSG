const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "docs" directory
app.use(express.static(path.join(__dirname, 'docs')));

// Fallback to index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});