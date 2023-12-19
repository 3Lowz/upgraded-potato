// @ts-nocheck
// import { MikroORM } from '@mikro-orm/mysql'

// Increasing the jest timeout for long ajax calls
jest.setTimeout(25000)

let db: any

beforeAll(async () => {
  db = globalThis.db
})

describe('Index Library Test:', () => {
  test(`[foo] Expect to connect to the db`, async () => {
    expect(db).toBeDefined()
    expect(db.em).toBeDefined()
  })
})
