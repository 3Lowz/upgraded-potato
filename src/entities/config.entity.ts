import { EntitySchema } from '@mikro-orm/core'

export class Config {
  id?: string
  code: string
  type?: string
  value: string
  codeModule: string
  priority?: number
  extCode: string
  uuid?: string
  virtual?: string
  getVirtual() {
    return `${this.value}myVfield` // Edit me!
  }
}

export interface IConfig extends Config {}

export const configSchema = new EntitySchema<IConfig>({
  name: 'Config',
  tableName: 't_config',
  class: Config,
  extends: 'UUID',
  properties: {
    id: { type: 'bigint', primary: true },
    uuid: { type: 'uuid', nullable: true }, // This is handled by the UUID abstract entity
    code: { type: 'string' },
    type: { type: 'string', nullable: true },
    value: { type: 'string', hidden: true },
    format: { type: 'string', default: 'INT', hidden: true },
    codeModule: { type: 'string' },
    priority: { type: 'integer', default: 0 },
    extCode: { type: 'string' },
    virtual: {
      type: 'method',
      persist: false,
      getter: true,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getterName: 'getVirtual',
    },
  },
})

export default configSchema
