import app from './server.js';

const PORT = 5000 || 6000 || 7000 || 7634


app.listen(PORT, () => {
  console.log(`server is working on port  http://localhost:${PORT}`);
});
