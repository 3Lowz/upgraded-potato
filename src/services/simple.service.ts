import { EntityManager, MikroORM } from '@mikro-orm/mysql'
import { ISimple } from '@root/entities'
import ApiService from '@root/utils/api.base.service'

export class SimpleService extends ApiService<ISimple> {
  public db: MikroORM
  public em: EntityManager

  constructor(database: MikroORM) {
    super(database, 'Simple')
    this.db = database
    this.em = this.db.em.fork()
  }
}

export default SimpleService
