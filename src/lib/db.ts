import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

export default function getPrismaClient(environment: string): PrismaClient {
    let libsql

    if (environment === 'development') {
    
    libsql = createClient({
        url: "file:dev.db"
      })
    }
      else {
        libsql = createClient({
            url: `${process.env.TURSO_DATABASE_URL}`,
            authToken: `${process.env.TURSO_AUTH_TOKEN}`,
          })
      }
      
      const adapter = new PrismaLibSQL(libsql)
      const prisma = new PrismaClient({ adapter })
      return prisma
    }