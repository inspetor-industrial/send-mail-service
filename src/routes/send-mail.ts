import Elysia, { t } from 'elysia'
import { Nodemailer } from '../core/nodemailer'

export const sendMail = new Elysia({
  prefix: '/send-mail',
  tags: ['Email'],
}).post(
  '/contact',
  async ({ body }) => {
    try {
      const response = await Nodemailer.sendEmail(body.email, body.subject, {
        name: body.name,
        email: body.email,
        phone: body.phone,
        subject: body.subject,
        message: body.message,
      })

      if (
        response &&
        Array.isArray(response.accepted) &&
        response.accepted.length > 0 &&
        (!response.rejected || response.rejected.length === 0)
      ) {
        return {
          success: true,
          error: {
            message: '',
            code: '',
          },
          info: {
            messageId: response.messageId,
            response: response.response,
            accepted: response.accepted,
            rejected: response.rejected,
          },
        }
      }

      return {
        success: false,
        error: {
          message:
            'O email não pôde ser enviado. Rejeitado pelo servidor SMTP.',
          code: 'EMAIL_REJECTED',
        },
        info: {
          messageId: response.messageId,
          accepted: response.accepted,
          rejected: response.rejected,
          response: response.response,
        },
      }
    } catch (err: any) {
      return {
        success: false,
        error: {
          message:
            err?.message ||
            'Ocorreu um erro inesperado ao tentar enviar o email.',
          code: err?.code || 'EMAIL_SEND_ERROR',
        },
        info: {
          messageId: '',
          accepted: [],
          rejected: [],
          response: '',
        },
      }
    }
  },
  {
    body: t.Object({
      name: t.String({
        maxLength: 100,
        minLength: 3,
      }),
      email: t.String({
        format: 'email',
      }),
      message: t.String({
        maxLength: 1000,
        minLength: 10,
      }),
      phone: t.String({}),
      subject: t.UnionEnum([
        'automotive-elevator-inspection',
        'pressure-vessel-inspection',
        'pipe-inspection',
        'integrity-inspection',
        'boiler-inspection',
        'fuel-tanks-inspection',
        'safety-valve-calibration',
        'manometer-calibration',
        'others',
      ]),
    }),
    response: t.Object({
      success: t.Boolean(),
      error: t.Object({
        message: t.String(),
        code: t.String(),
      }),
      info: t.Object({
        messageId: t.String(),
        accepted: t.Array(t.String()),
        rejected: t.Array(t.String()),
        response: t.String(),
      }),
    }),
  },
)
