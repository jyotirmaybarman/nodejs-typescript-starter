import "dotenv/config";
import { z } from "zod";
import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV ?? 'development'}` })

const envSchema = z.object({
    DB_TYPE: z.enum(["postgres", "mysql"]).default("postgres"),
    DB_DATABASE: z.string(),
    DB_HOST: z.string(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_PORT: z.coerce.number().default(5432),
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.enum(["development", "production", "test"]).optional().default("development"),
    JWKS_URI: z.string().optional(),
    ACCESS_TOKEN_SECRET: z.string(),
    REFRESH_TOKEN_SECRET: z.string(),
    REDIS_HOST:z.string(),
    REDIS_PORT:z.coerce.number(),
    REDIS_PASSWORD:z.string(),
})

export const env = envSchema.parse(process.env);

export type EnvSchema = z.infer<typeof envSchema> 