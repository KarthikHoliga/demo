const { authenticator } = require('otplib');

const secret = authenticator.generateSecret();
console.log('Secret:', secret);

const token = authenticator.generate(secret);
console.log('OTP:', token);

const isValid = authenticator.verify({ token, secret });
console.log('Valid?', isValid);