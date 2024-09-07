// index.js
//import routes
const userRouter = require('./api/UserR.js');

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'css' and 'js' directories
app.use(express.static('views')); 

// Serve the index.html file from the 'views' directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/tutor_dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'tutor_dashboard.html'));
});

//Use users Router
app.use( userRouter);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
