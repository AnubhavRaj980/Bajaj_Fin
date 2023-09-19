const express = require('express');

const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  // Calculate the highest alphabet in the input array of alphabets
  const alphabets = data.filter((item) => isNaN(item));
  const highestAlphabet = alphabets.reduce((max, alphabet) => {
    return alphabet > max ? alphabet : max;
  }, '');

  const response = {
    status: 'Success',
    user_id: 'anubhav_raj_24092002', 
    college_email: 'anubhav.raj2020@vitbhopal.ac.in', 
    college_roll: '20BCE10678', 
    numbers: data.filter((item) => !isNaN(item)),
    alphabets: alphabets,
    highest_alphabet: highestAlphabet,
  };

  res.status(200).json(response);
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


