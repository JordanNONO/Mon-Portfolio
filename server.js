const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Choisissez un port pour votre serveur

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configurez le transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Utilisation de Gmail, vous pouvez changer pour un autre service
    auth: {
      user: 'jordannono2245@gmail.com', // Votre adresse email
      pass: 'Makuitchechantal575' // Mot de passe ou App Password Gmail (pour plus de sécurité)
    }
  });

  // Configurer les options du mail
  const mailOptions = {
    from: email, // L'email de l'expéditeur (saisit dans le formulaire)
    to: 'jordannono2245@gmail.com', // Votre adresse e-mail où recevoir le message
    subject: `Nouveau message de ${name}`, // Sujet du message
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}` // Contenu du message
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent: ' + info.response);
      return res.send('Email sent successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
