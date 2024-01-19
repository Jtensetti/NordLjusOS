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

// Definiera API

const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Här kommer vi att definiera våra API:er

app.listen(PORT, () => {
  console.log(`Server körs på port ${PORT}`);
});

// Elevernas Dashboard

app.get('/student/schedule', (req, res) => {
  // Logik för att hämta studentens schema
  res.json({ success: true, schedule: 'Studentens Schema' });
});

app.get('/student/assignments', (req, res) => {
  // Logik för att hämta inlämningsuppgifter
  res.json({ success: true, assignments: 'Elevuppgifter' });
});

// Teacher Dashboard

app.get('/teacher/schedule', (req, res) => {
  // Logik för att hämta lärarens schema
  res.json({ success: true, schedule: 'Lärares Schema' });
});

app.post('/teacher/assignments', (req, res) => {
  // Logik för att ladda upp och hantera uppgifter
  res.json({ success: true, message: 'Uppgift sparad' });
});

// Admin och Rektor Dashboard

app.get('/admin/report', (req, res) => {
  // Logik för att generera rapporter
  res.json({ success: true, report: 'Skolrapport' });
});

app.get('/principal/overview', (req, res) => {
  // Logik för att ge en översikt över skolan
  res.json({ success: true, overview: 'Skolöversikt' });
});

app.get('/teacher/classroomDetails', (req, res) => {
  // Logik för att hämta detaljerad klassrumsplanering
  res.json({ success: true, details: 'Detaljerad Klassrumsplanering' });
});

app.get('/admin/attendanceReport', (req, res) => {
  // Logik för att hämta och generera närvarorapporter
  res.json({ success: true, report: 'Närvarorapport' });
});

// Exempel på rollbaserad åtkomstkontroll
app.use((req, res, next) => {
  // Validera JWT och kontrollera användarroll
  // Fortsätt bara om användaren har rätt behörighet
  next();
});

//Analysera Data
// I server.js

app.post('/logActivity', (req, res) => {
  const { username, activity } = req.body;
  // Logga aktiviteten i databasen
  // Använd denna data för att analysera användarbeteenden och systemanvändning
  res.json({ success: true, message: 'Aktivitet loggad' });
});
