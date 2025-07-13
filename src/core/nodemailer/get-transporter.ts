import nodemailer, { type Transporter } from 'nodemailer'
import { env } from '../../env'

export class GetTransporter {
  private static transporter: Transporter

  public static getTransporter() {
    if (!this.transporter) {
      this.transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: env.GOOGLE_EMAIL,
          pass: env.GOOGLE_PASSWORD,
        },
      })
    }

    return this.transporter
  }
}
