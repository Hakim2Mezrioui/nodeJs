const nodemail = require("nodemailer");

const sendEmail = async ({ emailTo, subject, code, content }) => {
  const transporter = nodemail.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_EMAIL ?? "mezrioui.hakim@gmail.com",
      pass: process.env.EMAIL_PASSWORD ?? "umbs zudv gwdg iani",
    },
  });

  const message = {
    to: emailTo,
    subject,
    // text or html
    html: `
            <div>
                <h3>Use this bellow code to ${content}</h3>
                <p><strong>Code: </strong> ${code}</p>
            </div>
        `,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;
