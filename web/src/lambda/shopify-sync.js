const getRawBody = require("raw-body")
const crypto = require("crypto")
require("dotenv").config()

console.log(process.env.secretKey)

export const handler = async event => {
  console.log(event)
  res.sendStatus(200)
}
// app.post('/webhooks/orders/create', async (req, res) => {
//   // We'll compare the hmac to our own hash
//   const hmac = req.get('X-Shopify-Hmac-Sha256');

//   // Use raw-body to get the body (buffer)
//   const body = await getRawBody(req);

//   // Create a hash using the body and our key
//   const hash = crypto
//     .createHmac('sha256', process.env.secretKey)
//     .update(body, 'utf8', 'hex')
//     .digest('base64');

//   // Compare our hash to Shopify's hash
//   if (hash === hmac) {
//     // It's a match! All good
//     console.log('Phew, it came from Shopify!');
//     res.sendStatus(200);
//   } else {
//     // No match! This request didn't originate from Shopify
//     console.log('Danger! Not from Shopify!');
//     res.sendStatus(403);
//   }
// });

// app.listen(3000, () => console.log('running on port 3000'));
