import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'

interface ContactEmailProps {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactEmail({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) {
  const previewText = `Nova mensagem de contato de ${name}`

  const subjectTranslations: { [key: string]: string } = {
    'automotive-elevator-inspection': 'Inspeção de Elevadores Automotivos',
    'pressure-vessel-inspection': 'Inspeção de Vasos de Pressão',
    'pipe-inspection': 'Inspeção de Tubulações',
    'integrity-inspection': 'Inspeção de Integridade',
    'boiler-inspection': 'Inspeção de Caldeiras',
    'fuel-tanks-inspection': 'Inspeção de Tanques de Combustível',
    'safety-valve-calibration': 'Calibração de Válvulas de Segurança',
    'manometer-calibration': 'Calibração de Manômetros',
    others: 'Outros',
  }

  const translatedSubject = subjectTranslations[subject] || subject

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 my-auto mx-auto font-sans">
          <Container className="bg-white border border-solid border-gray-200 rounded-lg my-10 mx-auto p-8 w-full max-w-[500px]">
            <Heading className="text-gray-800 text-2xl font-semibold text-center p-0 my-8 mx-0">
              Nova Mensagem de Contato
            </Heading>

            <Text className="text-gray-600 text-base leading-6">
              Você recebeu uma nova mensagem através do formulário de contato do
              seu site.
            </Text>

            <Section className="bg-gray-50 border border-solid border-gray-200 rounded-md p-5 my-6">
              <Text className="text-lg font-semibold text-gray-800 mb-4">
                Detalhes do Contato
              </Text>
              <Hr className="border-gray-300 my-4" />
              <Text className="text-gray-700 text-sm leading-6">
                <strong className="font-semibold">Nome:</strong> {name}
              </Text>
              <Text className="text-gray-700 text-sm leading-6">
                <strong className="font-semibold">E-mail:</strong>{' '}
                <Link href={`mailto:${email}`} className="text-blue-600">
                  {email}
                </Link>
              </Text>
              <Text className="text-gray-700 text-sm leading-6">
                <strong className="font-semibold">Telefone:</strong> {phone}
              </Text>
              <Text className="text-gray-700 text-sm leading-6">
                <strong className="font-semibold">Assunto:</strong>{' '}
                {translatedSubject}
              </Text>
            </Section>

            <Section>
              <Text className="text-lg font-semibold text-gray-800 mb-4">
                Mensagem
              </Text>
              <Text className="text-gray-600 text-base leading-6 border-l-4 border-gray-300 pl-4 italic">
                {message}
              </Text>
            </Section>

            <Hr className="border-gray-300 my-8" />

            <Section className="text-center text-gray-500 text-xs">
              <Text>
                &copy; {new Date().getFullYear()} Inspetor Industrial. Todos os
                direitos reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

ContactEmail.PreviewProps = {
  name: 'Pedro Aba',
  email: 'pedro@example.com',
  phone: '11999999999',
  subject: 'boiler-inspection',
  message: `Olá, gostaria de agendar uma inspeção de caldeira para minha instalação. Por favor, me informe as datas e horários disponíveis.`,
}
