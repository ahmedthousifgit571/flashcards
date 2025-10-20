import 'dotenv/config'
import { drizzle } from 'drizzle-orm/neon-http'

// Create a singleton Drizzle client for server-side usage
// Assumes DATABASE_URL is set in env
export const db = drizzle(process.env.DATABASE_URL!)


