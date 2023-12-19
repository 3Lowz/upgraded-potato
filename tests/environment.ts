// @ts-nocheck
import { TestEnvironment } from 'jest-environment-node'
import { MikroORM, type MySqlDriver } from '@mikro-orm/mysql'
import dbConfig from './../src/mikro-orm.config'

export default class LibraryEnvironment extends TestEnvironment {
  db: MikroORM

  constructor(config, context) {
    super(config, context)
    // this.testPath = context.testPath
    // this.docblockPragmas = context.docblockPragmas
  }

  async setup() {
    await super.setup()

    this.db = await MikroORM.init<MySqlDriver>(dbConfig)
    this.global.db = this.db as MikroORM

    return
  }

  async teardown() {
    // this.global.someGlobalObject = destroyGlobalObject()
    // await someTeardownTasks()
    this.db.close()
    await super.teardown()
  }

  getVmContext() {
    return super.getVmContext()
  }

  async handleTestEvent(event, state) {
    if (event.name === 'test_start') {
      // ...
    }
  }
}

module.exports = LibraryEnvironment
