const express = require('express');
const path = require('path');
const app = express();

// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public folder (like CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set route for home page
app.get('/', (req, res) => {
  res.render('content');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
