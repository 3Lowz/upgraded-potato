export class Config {
  id?: string
  code: string
  type?: string
  value: string
  codeModule: string
  priority?: number
  extCode: string
  uuid?: string
  getVirtual() {
    return `${this.value} + myVfield`
  }
}

export type IConfig = Config

export const configSchema = {
  name: 'Config',
  tableName: 'glo_config',
  // extends: 'Timestamp', // uncomment after @adm-3/utl import
  properties: {
    id: { type: 'bigint', primary: true },
    code: { type: 'string' },
    type: { type: 'string', nullable: true },
    // rules 1:m
    value: { type: 'string', hidden: true },
    format: { type: 'string', default: 'INT', hidden: true },
    codeModule: { type: 'string' },
    priority: { type: 'integer', default: 0 },
    extCode: { type: 'string' },
    uuid: { type: 'uuid', nullable: true }, // This is handled by the UUID abstract entity
    virtual: { type: 'method', persist: false, getter: true, getterName: 'getVirtual' },
  },
}

export default [configSchema, Config]
