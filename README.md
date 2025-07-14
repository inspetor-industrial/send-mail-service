# Inspetor Industrial - Serviço de Envio de E-mail

API responsável pelo envio de e-mails para a aplicação do Inspetor Industrial. Este serviço pode ser utilizado para enviar qualquer tipo de e-mail que a aplicação necessite, como o formulário de contato.

## ✨ Features

-   **Framework Moderno:** Construído com [Elysia.js](https://elysiajs.com/), um framework web rápido e amigável para Bun.
-   **Templates de E-mail com React:** Utiliza [@react-email](https://react.email/) para criar templates de e-mail bonitos e componentizados com React.
-   **Envio Confiável:** Usa [Nodemailer](https://nodemailer.com/) para o envio de e-mails através de um provedor SMTP (configurado para Gmail).
-   **Validação de Dados:** Garante a integridade dos dados de entrada com [Zod](https://zod.dev/).
-   **Documentação Interativa:** Documentação da API gerada automaticamente e disponível com [Swagger UI](https://swagger.io/tools/swagger-ui/).
-   **Ambiente de Desenvolvimento Completo:** Scripts prontos para desenvolvimento, build, e visualização de e-mails.

## 🛠️ Tecnologias Utilizadas

-   [Bun](https://bun.sh/)
-   [Elysia.js](https://elysiajs.com/)
-   [React](https://react.dev/)
-   [React Email](https://react.email/)
-   [Nodemailer](https://nodemailer.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Zod](https://zod.dev/)

## 🚀 Como Começar

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

-   [Bun](https://bun.sh/docs/installation) instalado.
-   Uma conta do Gmail com uma [Senha de App](https://support.google.com/accounts/answer/185833) configurada para o envio de e-mails.

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/send-mail-service.git
cd send-mail-service
```

### 2. Instalar as Dependências

```bash
bun install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto, copiando o exemplo de `.env.example`:

```bash
cp .env.example .env
```

Agora, edite o arquivo `.env` com as suas credenciais do Google:

```env
# E-mail da conta Google que fará o envio
GOOGLE_EMAIL="seu-email@gmail.com"

# Senha de App gerada na sua conta Google
GOOGLE_PASSWORD="sua-senha-de-app"
```

### 4. Executar o Servidor de Desenvolvimento

```bash
bun run dev
```

O servidor estará disponível em `http://localhost:3000`.

### 5. Visualizar os Templates de E-mail

Para visualizar e testar os componentes de e-mail em seu navegador, execute:

```bash
bun run email
```

Isso iniciará um servidor de desenvolvimento para o React Email em `http://localhost:3001`.

##  API Endpoints

A documentação completa e interativa da API está disponível na rota `/swagger`.

### `POST /send-mail/contact`

Envia um e-mail a partir do formulário de contato. O e-mail é enviado para o endereço configurado na variável de ambiente `GOOGLE_EMAIL`.

#### Corpo da Requisição (Request Body)

```json
{
  "name": "string",
  "email": "string (formato de e-mail)",
  "phone": "string",
  "message": "string",
  "subject": "enum"
}
```

-   **subject** (enum): Deve ser um dos seguintes valores:
    -   `automotive-elevator-inspection`
    -   `pressure-vessel-inspection`
    -   `pipe-inspection`
    -   `integrity-inspection`
    -   `boiler-inspection`
    -   `fuel-tanks-inspection`
    -   `safety-valve-calibration`
    -   `manometer-calibration`
    -   `others`

### `GET /healthy`

Endpoint para verificação de status do serviço. Retorna uma mensagem simples indicando que o serviço está operacional.

#### Resposta (Response)

```json
{
  "status": "ok",
  "message": "Service is healthy"
}
```

## 🏗️ Estrutura do Projeto

```
send-mail-service/
├── src/
│   ├── core/
│   │   ├── nodemailer/
│   │   │   └── get-transporter.ts  # Configuração do transporter do Nodemailer
│   │   └── nodemailer.ts           # Classe principal para envio de e-mails
│   ├── emails/
│   │   └── contact.tsx             # Template de e-mail de contato com React
│   ├── routes/
│   │   ├── healthy.ts              # Rota de health check
│   │   └── send-mail.ts            # Rota para envio de e-mail
│   ├── env.ts                      # Validação e exportação de variáveis de ambiente (Zod)
│   ├── index.ts                    # Ponto de entrada da aplicação Elysia
│   └── utils.ts                    # Funções utilitárias
├── .env                            # Arquivo de variáveis de ambiente (não versionado)
├── package.json
└── tsconfig.json
```