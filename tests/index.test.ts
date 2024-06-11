import { MikroORM } from '@mikro-orm/mysql'

// Increasing the jest timeout for long ajax calls
jest.setTimeout(2500)

let db: MikroORM

beforeAll(async () => {
  db = (globalThis as any).db
})

describe('Index Library Test:', () => {
  test(`[foo] Expect to connect to the db`, async () => {
    expect(db).toBeDefined()
    expect(db.em).toBeDefined()
  })
})
