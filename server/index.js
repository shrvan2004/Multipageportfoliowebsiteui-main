const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/api/contact/customer', (req, res) => {
  console.log('Customer contact:', req.body);
  res.json({ ok: true, message: 'Customer inquiry received' });
});

app.post('/api/contact/career', (req, res) => {
  console.log('Career contact:', req.body);
  res.json({ ok: true, message: 'Career inquiry received' });
});

app.post('/api/apply', (req, res) => {
  console.log('Job application:', req.body);
  res.json({ ok: true, message: 'Application received' });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
