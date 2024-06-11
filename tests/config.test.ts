import { ConfigService } from './../src/index'
import { IConfig } from '../src/entities/config.entity'

// Increasing the jest timeout for long ajax calls
jest.setTimeout(2500)

let service: ConfigService
let db: any

beforeAll(async () => {
  db = (globalThis as any).db
})

describe('Config Service Test:', () => {
  // const testConfigsId: any = []
  let testConfigId: string = ''

  beforeAll(() => {
    service = new ConfigService(db)
  })

  // test(`[create] Should fail because Config.value is missing`, async () => {
  //   try {
  //     const res = await service.create({
  //       code: 'glo_db_version',
  //     } as IConfig)
  //   } catch (error: any) {
  //     expect(error.toString()).toMatch(/Config.value is required/i)
  //   }
  // })

  // test(`[create] Should fail because Config.codModules is missing`, async () => {
  //   try {
  //     const res = await service.create({
  //       code: 'glo_db_version',
  //       value: '0.10',
  //     } as IConfig)
  //   } catch (error: any) {
  //     expect(error.toString()).toMatch(/Config.codModules is required/i)
  //   }
  // })

  test(`[create] Should create a new Config instance`, async () => {
    const res = await service.create({
      code: 'glo_db_version',
      value: '0.10',
      codeModule: 'TST',
      extCode: 'TST',
    } as IConfig)
    expect(res).toBeDefined()
    expect(res.id).toBeDefined()
    // console.log(`virtual is : ${res.virtual}`)
    // console.log(`getVirtual is : ${res.getVirtual}`)
    // expect(res.virtual).toBeDefined()
    testConfigId = res.id!
  })

  // test(`[create] Should create another Config instance`, async () => {
  //   const res = await service.create({
  //     code: 'das_db_version',
  //     value: '0.00',
  //     codModules: '',
  //   } as IConfig)
  //   expect(res).toBeDefined()
  //   expect(res.id).toBeDefined()
  //   testConfigId.push(res.id)
  // })

  // test(`[create] Should fail with an Unique Constraint Exception on duplicate code+cod_modules entry`, async () => {
  //   try {
  //     const res = await service.create({
  //       code: 'glo_db_version',
  //       value: '0.12', //different value does not avoid collision
  //       codModules: '',
  //     } as IConfig)
  //   } catch (error: any) {
  //     expect(error.toString()).toMatch(/Duplicate entry/i)
  //   }
  // })

  // test(`[update] Should update the existing Config`, async () => {
  //   const res = await service.update(testConfigId[0], {
  //     value: '1.0',
  //   } as IConfig)
  //   expect(res).toBeDefined()
  //   expect(res.value).toBe('1.0')
  // })

  // test(`[getList] Should return 2 config entries`, async () => {
  //   const res = await service.getList()
  //   expect(res).toBeDefined()
  //   expect(res.length).toBe(2)
  // })

  test(`[getById] Should return Config by id`, async () => {
    const res = await service.getById(testConfigId)
    expect(res).toBeDefined()
    // console.log(`virtual is : ${res.virtual}`)
    // console.log(`getVirtual is : ${res.getVirtual}`)
    expect(res.code).toBe('glo_db_version')
    expect(res.value).toBe('0.10')
  })

  // test(`[delete] Should delete first config entry`, async () => {
  //   const res = await service.delete(testConfigId[0])
  //   expect(res).toBe(true)
  // })

  // test(`[delete] Should delete second config entry`, async () => {
  //   const res = await service.delete(testConfigId[1])
  //   expect(res).toBe(true)
  // })

  // test(`[getList] Should return no entries`, async () => {
  //   const res = await service.getList()
  //   expect(res).toBeDefined()
  //   expect(res.length).toBe(0)
  // })
})
