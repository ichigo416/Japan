const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['POST', 'GET'],
}));

const subscribeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many requests. Please try again later.' },
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => { console.error('MongoDB error:', err); process.exit(1); });

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  subscribedAt: { type: Date, default: Date.now },
  ip: { type: String },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  if (email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

app.post('/api/subscribe', subscribeLimiter, async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ success: false, message: 'Email is required.' });

    const sanitized = email.trim().toLowerCase();

    if (!isValidEmail(sanitized)) return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });

    const blockedDomains = ['mailinator.com', 'tempmail.com', 'guerrillamail.com', 'trashmail.com', '10minutemail.com', 'yopmail.com'];
    const domain = sanitized.split('@')[1];
    if (blockedDomains.includes(domain)) return res.status(400).json({ success: false, message: 'Disposable email addresses are not allowed.' });

    await new Subscriber({ email: sanitized, ip: req.ip }).save();

    return res.status(201).json({ success: true, message: "You're subscribed! Welcome aboard 🎉" });

  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ success: false, message: 'This email is already subscribed.' });
    console.error(err);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`)); 