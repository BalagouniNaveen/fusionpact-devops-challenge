const express = require('express');
const mongoose = require('mongoose');
const client = require('prom-client');
const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/devopsdb')
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.log(" DB Error:", err));

// Middleware
app.use(express.json());

// Sample API
app.get('/api', (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

// Prometheus metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => console.log(` Backend running on port ${PORT}`));
