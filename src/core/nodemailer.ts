import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import ContactEmail from '../emails/contact'
import { GetTransporter } from './nodemailer/get-transporter'
import { env } from '../env'

export class Nodemailer {
  public static async sendEmail(
    to: string,
    subject: string,
    reactEmailParams: React.ComponentProps<typeof ContactEmail>,
  ) {
    const transporter = GetTransporter.getTransporter()
    const html = renderToStaticMarkup(
      React.createElement(ContactEmail, reactEmailParams),
    )

    const mailOptions = {
      from: to,
      to: env.GOOGLE_EMAIL,
      subject,
      html,
    }

    return await transporter.sendMail(mailOptions)
  }
}
