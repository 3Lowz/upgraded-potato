import { EntitySchema } from '@mikro-orm/core'
import { v4 } from 'uuid'

export class UUID {
  uuid: string
}

export interface IUUID extends UUID {}

export const UUIDSchema = new EntitySchema<IUUID>({
  name: 'UUID',
  abstract: true,
  properties: {
    uuid: { type: 'string', primary: true, onCreate: () => v4() },
  },
})

export default UUIDSchema
