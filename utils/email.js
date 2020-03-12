require('dotenv').config();
const nodemailer = require('nodemailer');

Settings = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  agentEmail: process.env.GMAIL_USER,
  agentPassword: process.env.GMAIL_PASSWORD,
  target: process.env.GMAIL_TARGET || process.env.GMAIL_USER,
  auth: {
    type: "login",
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  },
  enabled: true
}

const transporter = nodemailer.createTransport({
  service: Settings.service,
  host: Settings.host,
  secure: Settings.secure,
  auth:  Settings.auth,
});

const mailOptions = {
  from: Settings.agentEmail,
  to: Settings.target,
  subject: 'Test Run Message - E-commerce Shop',
  html: ''
};

const Email = {
  isEnabled: function() {
    return Settings.enabled;
  },
  sendEmail: (msg) => {
    if(!msg) throw 'Cannot send email, message is empty!';

    mailOptions.html  = msg;  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) console.log(error);
      else console.log('Email sent: ' + info.response);
    });  
  }
};

console.log(Settings.target)
module.exports = Email;