"use server";
import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

export interface EmailOptions {
  subject: string;
  text?: string;
}

const {
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_SMTP,
  MAIL_SMTP_PORT,
  MAIL_SMTP_SECURETY,
  MAIL_SEND,
} = process.env;

export async function sendEmail({ subject, text }: EmailOptions) {
  if (!MAIL_USERNAME || !MAIL_PASSWORD || !MAIL_SMTP || !MAIL_SEND) {
    throw new Error("Parâmetros de e-mail ausentes no .env");
  }
  const transporter = nodemailer.createTransport({
    host: MAIL_SMTP,
    port: Number(MAIL_SMTP_PORT),
    secure: Number(MAIL_SMTP_SECURETY) === 1 ? true : false,
    auth: {
      user: MAIL_USERNAME,
      pass: MAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"Site" <${MAIL_USERNAME}>`,
    to: MAIL_SEND,
    subject,
    text,
  });

  console.log("Email enviado:", info.messageId);
}
