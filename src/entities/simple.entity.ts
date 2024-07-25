import { EntitySchema } from '@mikro-orm/core'

// Useful when instantiating db.repository
export class Simple {
  id?: string
  uuid?: string
  blob: string
}

export interface ISimple extends Simple {}

export const simpleSchema = new EntitySchema<ISimple>({
  name: 'Simple',
  tableName: 't_simple',
  extends: 'UUID',
  properties: {
    id: { type: 'bigint', primary: true },
    uuid: { type: 'uuid', nullable: true }, // This is handled by the UUID abstract entity
    blob: { type: 'varchar', length: 1024, nullable: true },
  },
})

export default simpleSchema
