const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

 

const app = express();
const port = process.env.PORT || 5000;

// configure middleware
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
  }));
  

// send email using Nodemailer
app.post("/api/contact", async (req, res) => {
  const { name, phone, email, message, file } = req.body;
    
  const fileData = Buffer.from(file.split(",")[1], "base64");
   

  try {
    // send email using Nodemailer
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      attachments: [
        {
          filename: "attachment",  
          content: fileData,

        },
      ],
       
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred while sending the email." });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
