import { config } from "./config";
import nodemailer from "nodemailer";

const environment = config[process.env.NODE_ENV || "desarrollo"];
const { host, port, email, password } = environment.email;

export const transporter = nodemailer.createTransport({
  host: host,
  port,
  secure: false,
  auth: {
    user: email,
    pass: password,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Puede enviar correos electrónicos");
  })
  .catch(() => {
    console.log("Error al enviar correos");
  });

