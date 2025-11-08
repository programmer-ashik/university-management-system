// src/config/index.ts
import dotenv from 'dotenv'
import path from 'path'

const envPath = path.resolve(process.cwd(), '.env') //mush .env have in root folder.
const result = dotenv.config({ path: envPath })

if (result.error) {
  console.error('❌ Failed to load .env', result.error)
  process.exit(1)
}

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000
const DATABASE_URL = process.env.DATABASE_URL
const DEFAULT_USER_ID = process.env.DEFAULT_USER_ID
const DEFAULT_USER_PASS = process.env.DEFAULT_USER_PASS
if (!DATABASE_URL) {
  throw new Error('❌ DATABASE_URL is not defined in .env')
}

export default {
  port: PORT,
  database_url: DATABASE_URL,
  userId: DEFAULT_USER_ID,
  userPass: DEFAULT_USER_PASS,
}
