import { EntityManager, MikroORM } from '@mikro-orm/mysql'
import { Config } from './../entities/config.entity'

export class ConfigService /* extends ApiService<Config> */ {
  public db: MikroORM
  public em: EntityManager

  // private codeModule: string

  constructor(database: MikroORM) {
    // super(database, 'Config')
    // this.codeModule = 'EXT'
    if (!database) {
      throw new Error(`Database connection must be specified`, { cause: { statusCode: 500 } })
    }
    this.db = database
    this.em = this.db.em.fork()
    return this
  }

  async create(config: any) {
    const repo = this.em.getRepository(Config)
    console.log(config)
    const newConfig = repo.create({ ...config })
    this.em.persist([newConfig])
    await this.em.flush()
    return newConfig
  }

  getById(id: string) {
    const repo = this.em.getRepository(Config)
    const config = repo.findOne({ id })
    return config
  }

  // update() {}
  // getList() {}
  // getByCode() {}
  // getByModule() {}

  async getForModule(codeModule: string) {
    const settings = await this.em.find(Config, { codeModule: codeModule })
    return settings
  }
}

export default ConfigService
