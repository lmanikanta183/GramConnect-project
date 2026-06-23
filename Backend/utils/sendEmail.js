const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text, html = null) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    family: 4,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"GramConnect" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html: html || text,
  });
};

module.exports = sendEmail;
