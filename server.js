import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('OK, bombou!!');
});


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

//export default app;
