import { SimpleService } from './../src/services/simple.service'
import { ISimple } from '../src/entities/index'

// Increasing the jest timeout for long ajax calls
jest.setTimeout(2500)

let service: SimpleService
let db: any

beforeAll(async () => {
  db = (globalThis as any).db
})

describe('Config Service Test:', () => {
  const testSimpleEntityIds: string[] = []

  beforeAll(() => {
    service = new SimpleService(db)
  })

  test(`[create] Should create a new Simple instance`, async () => {
    const res = await service.create({
      blob: 'myRandomBlobGoesHere...',
    } as ISimple)
    expect(res).toBeDefined()
    expect(res.id).toBeDefined()
    testSimpleEntityIds.push(res.id!)
  })

  test(`[create] Should create another Simple instance`, async () => {
    const res = await service.create({
      blob: 'IamAgainstThe#1Id',
    } as ISimple)
    expect(res).toBeDefined()
    expect(res.id).toBeDefined()
    testSimpleEntityIds.push(res.id!)
  })

  test(`[update] Should update the existing Simple`, async () => {
    const res = await service.update(testSimpleEntityIds[0], {
      blob: 'YrUchangingTHEbest?',
    } as ISimple)
    expect(res).toBeDefined()
    expect(res.blob).toBe('YrUchangingTHEbest?')
  })

  test(`[getList] Should return 2 simple entries`, async () => {
    const res = await service.getList()
    expect(res).toBeDefined()
    expect(res.length).toBe(2)
  })

  test(`[getById] Should return Simple by id`, async () => {
    const res = await service.getById(testSimpleEntityIds[1])
    expect(res).toBeDefined()
    expect(res.blob).toBe('IamAgainstThe#1Id')
  })

  test(`[getById] Should throw error if id doesn't exists`, async () => {
    await expect(service.getById(`999`)).rejects.toThrow()
  })

  test(`[delete] Should delete first config entry`, async () => {
    const res = await service.delete(testSimpleEntityIds[0])
    expect(res).toBe(true)
  })

  test(`[delete] Should delete second config entry`, async () => {
    const res = await service.delete(testSimpleEntityIds[1])
    expect(res).toBe(true)
  })

  test(`[getList] Should return no entries`, async () => {
    const res = await service.getList()
    expect(res).toBeDefined()
    expect(res.length).toBe(0)
  })
})
