import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { MailOptions } from "../models/mailOptionsModel";

dotenv.config();

export class Nodemailer {
  enviarEmail({ to, subject, text, html }: MailOptions) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anthonithomes2@gmail.com",
        pass: process.env.NODEMAILER_PASS,
      },
    });

    let mailOptions = {
      from: "Anthoni Campos <anthonithomes2@gmail.com>",
      to: to,
      subject: subject,
      text: text,
      html: html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log("Erro ao enviar:", error);
      }
      console.log("E-mail enviado:", info.response);
    });
  }
}
