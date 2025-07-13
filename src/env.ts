import { z } from 'zod/v4'

const envSchema = z.object({
  GOOGLE_EMAIL: z.email(),
  GOOGLE_PASSWORD: z.string(),
})

export const env = envSchema.parse(Bun.env)
