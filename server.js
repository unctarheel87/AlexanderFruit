const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const getNextDayOfWeek = require('./nextDayOfWeek');
const stripe = require('stripe')('sk_test_sRIzwK4GZZfZSUll2g6pZEhn00XiNRcAp0');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public')); // serve static assets

app.get('/test', (req, res) => {
  res.json('hello');
});

app.post('/create-customer', async (req, res) => {
  const intent = req.body;
  const cd = intent.customer_details;
  const addr = cd.address;
  // This creates a new Customer and attaches the PaymentMethod in one API call.
  const customer = await stripe.customers.create({
    payment_method: intent.payment_method,
    email: cd.email,
    phone: cd.phone,
    name: cd.name,
    address: {
      city: addr.city,
      line1: addr.line1,
      state: addr.state,
      postal_code: addr.postal_code,
    },
    invoice_settings: {
      default_payment_method: intent.payment_method,
    },
  });
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ plan: 'plan_H5PdZ749PdV0Y7' }],
    expand: ['latest_invoice.payment_intent'],
    billing_cycle_anchor: Math.round(getNextDayOfWeek(2).valueOf() * 0.001),
  });
  res.end();
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
