// server.js (i backend-mappen)

const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Inloggning försökt för', username);

  // Här skulle vi ha logik för att verifiera användarnamn och lösenord
  res.json({ success: true, message: 'Inloggning lyckad!' });
});

app.listen(PORT, () => {
  console.log(`Server körs på port ${PORT}`);
});
