import path from 'path'
import dotenv, { DotenvParseOutput } from 'dotenv'
import { MySqlDriver, Options } from '@mikro-orm/mysql'
import entities from './entities'

const DEBUG = false

const readFileEnv = (filepath?: string): DotenvParseOutput => {
  const envPath = filepath || './../'
  const envFilename = '.env'
  const nodeEnv = process.env.NODE_ENV ?? 'test'
  const envFile = path.join(__dirname, envPath, `${envFilename}.${nodeEnv}`)
  if (DEBUG) console.log(`<d> Reading file:\t${envFile}`)
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

const env = readFileEnv()

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
  debug: DEBUG,
}

export default config
