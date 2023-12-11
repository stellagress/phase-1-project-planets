const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('/api', router)
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})



// const express = require('express');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 5000;

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Route for serving index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
