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

// Tillägg i server.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = {}; // Detta ska senare ersättas med en databas

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users[username] = { password: hashedPassword };
  res.json({ success: true, message: 'Registrering lyckad!' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ username }, 'hemligNyckel'); // Använd en säkrare nyckel
    res.json({ success: true, token });
  } else {
    res.json({ success: false, message: 'Fel användarnamn eller lösenord' });
  }
});
