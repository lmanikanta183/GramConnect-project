const sendEmail = async (to, subject, text, html = null) => {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "GramConnect", email: "manilanka150@gmail.com" },
      to: [{ email: to }],
      subject: subject,
      htmlContent: html || `<p>${text}</p>`,
      textContent: text,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Brevo error: ${JSON.stringify(errorData)}`);
  }

  return response.json();
};

module.exports = sendEmail;
