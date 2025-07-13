import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { healthy } from './routes/healthy'
import { sendMail } from './routes/send-mail'

const app = new Elysia()
  .use(
    swagger({
      path: '/swagger',
      documentation: {
        info: {
          title: 'Inspetor Industrial - SEND MAIL SERVICE',
          version: '1.0.0',
          description:
            'API responsável pelo envio de e-mails para a aplicação do Inspetor Industrial. Este serviço pode ser utilizado para enviar qualquer tipo de e-mail que a aplicação necessite, incluindo notificações, alertas, confirmações e outras comunicações automatizadas.',
        },
        tags: [
          {
            name: 'Email',
            description: 'API para enviar e-mails para o Inspetor Industrial',
          },
          {
            name: 'Health',
            description: 'API para verificar o status do serviço',
          },
        ],
        servers: [
          {
            url: 'http://localhost:3000',
            description: 'Servidor local',
          },
        ],
      },
    }),
  )
  .use(healthy)
  .use(sendMail)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
