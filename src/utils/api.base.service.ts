import { EntityManager, MikroORM } from '@mikro-orm/mysql'

export class ApiService<T extends object> {
  public db: MikroORM
  public em: EntityManager
  private name: string

  constructor(database: MikroORM, name: string) {
    if (!database) {
      throw new Error(`A Database connection must be specified`, { cause: { statusCode: 500 } })
    }
    this.db = database
    this.name = name
    this.em = this.db.em.fork()
    return this
  }

  async create(data: T): Promise<T> {
    // const repo = this.em.getRepository(T)
    const item = this.em.create(this.name, { ...data })
    this.em.persist([item])
    await this.em.flush()
    return { ...item } as T
  }

  async update(id: string, data: T): Promise<T> {
    const item = await this.em.findOne(this.name, { id: id })
    if (!item) {
      throw new Error(`${this.name} with id: ${id} not found`, { cause: { statusCode: 404 } })
    }
    this.em.assign(item, { ...data } as object, { mergeObjectProperties: true })
    // or
    // wrap(item).assign({ ...data } as object, { mergeObjects: true })
    await this.em.flush()
    return item as T
  }

  async getList(): Promise<T[]> {
    const items = await this.em.find(this.name, {})
    return items as T[]
  }

  async getById(id: string): Promise<T> {
    const item = await this.em.findOne(this.name, { id })
    if (!item) {
      throw new Error(`${this.name} with id: ${id} not found`, { cause: { statusCode: 404 } })
    }
    return item as T
  }

  async delete(id: string): Promise<boolean> {
    const toDelete = await this.em.findOne(this.name, { id })
    if (!toDelete) {
      throw new Error(`${this.name} with id: ${id} not found`, { cause: { statusCode: 404 } })
    }
    try {
      await this.em.remove(toDelete).flush()
    } catch (err: any) {
      throw new Error(err.message, { cause: { err: err, statusCode: 500 } })
    }
    return true
  }
}

export default ApiService
