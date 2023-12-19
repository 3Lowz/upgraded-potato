import path from 'path'
import dotenv from 'dotenv'
import librarySchemas from './entities'
import { EntitySchema } from '@mikro-orm/core'
import { MySqlDriver, Options } from '@mikro-orm/mysql'

const DEBUG = true

const readFileEnv = (filepath?: string): any => {
  const envPath = './../'
  const envFilename = '.env'
  const nodeEnv = process.env.NODE_ENV ?? 'test'
  const envFile = path.join(__dirname, envPath, `${envFilename}.${nodeEnv}`)
  if (DEBUG) console.log(`Reading file: ${envFile}`)

  const env = dotenv.config({ path: envFile }).parsed
  if (!env) {
    throw new Error(`A configuration file must be specified (.env), not found in: ${envFile}`)
  }
  if (DEBUG)
    console.log(
      `<d> Connecting with ${env.MYSQL_HOST}:${env.MYSQL_PORT} using ${env.MYSQL_USER} to ${env.MYSQL_DB_NAME}`
    )
  return env
}

export function createEntities(entity: any): any {
  return new EntitySchema<(typeof entity)[1]>(entity[0])
}

const env = readFileEnv()
const entities = librarySchemas.map((entity: any) => createEntities(entity))

const config: Options = {
  driver: MySqlDriver,
  dbName: env.MYSQL_DB_NAME,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASS,
  entities: entities,
  // migrations: {
  //   path: 'dist/migrations',
  //   pathTs: 'src/migrations',
  // },
  schemaGenerator: {
    disableForeignKeys: false,
  },
  debug: true,
}

export default config
