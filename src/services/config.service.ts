import { EntityManager, MikroORM } from '@mikro-orm/mysql'
import { Config } from './../entities/config.entity'

export class ConfigService /* extends ApiService<Config> */ {
  public db: MikroORM
  public em: EntityManager

  constructor(database: MikroORM) {
    if (!database) {
      throw new Error(`Database connection must be specified`, { cause: { statusCode: 500 } })
    }
    this.db = database
    this.em = this.db.em.fork()
    return this
  }

  async create(config: any): Promise<Config> {
    const repo = this.em.getRepository(Config)
    const newConfig = repo.create({ ...config })
    this.em.persist([newConfig])
    await this.em.flush()
    return newConfig
  }

  async getById(id: string): Promise<Config> {
    const repo = this.em.getRepository(Config)
    const config = await repo.findOne({ id })
    if (!config) {
      throw new Error(`Config with id : ${id} not found`)
    }
    return config
  }

}

export default ConfigService
