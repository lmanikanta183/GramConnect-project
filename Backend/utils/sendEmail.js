const sendEmail = async (to, subject, text, html = null) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "GramConnect <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html: html || text,
      text: text,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Resend error: ${JSON.stringify(errorData)}`);
  }

  return response.json();
};

module.exports = sendEmail;
