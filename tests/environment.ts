import { TestEnvironment } from 'jest-environment-node'
import { MikroORM, type MySqlDriver } from '@mikro-orm/mysql'
import dbConfig from './../src/mikro-orm.config'

export default class LibraryEnvironment extends TestEnvironment {
  db: MikroORM

  constructor(config: any, context: any) {
    super(config, context)
  }

  async setup() {
    await super.setup()

    this.db = await MikroORM.init<MySqlDriver>(dbConfig)
    this.global.db = this.db as MikroORM

    return
  }

  async teardown() {
    this.db.close()
    await super.teardown()
  }

  getVmContext() {
    return super.getVmContext()
  }

  async handleTestEvent(event: any, state: Object) {
    if (event.name === 'test_start') {
      // ...
    }
  }
}

module.exports = LibraryEnvironment
