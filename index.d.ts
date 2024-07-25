import { Entity } from '@mikro-orm/core'
import { MikroORM, EntityManager } from '@mikro-orm/mysql'

import libraryEntities from '@root/entities'
import { ConfigService, SimpleService } from '@root/services'

import { Config, IConfig, Simple, ISimple } from './src/entities1'

/**
 * Library definition
 */
declare module '@3lowz/upgraded-potato' {
  export { ApiService, ConfigService, SimpleService, IConfig, ISimple, Config, Simple }
  export { libraryEntities as default }
}

/**
 * Services definitions
 */
declare class ApiService<T> {
  private db: MikroORM
  private em: EntityManager
  private name: string
  constructor(db: MikroORM, name: string): ApiService<T>
  async create(data: T): Promise<T>
  async update(id: string, data: T): Promise<T>
  async getList(): Promise<T[]>
  async getById(id: string): Promise<T>
  async delete(id: string): Promise<boolean>
}

declare class ConfigService {
  // extends ApiService<IConfig> {
  private em: EntityManager
  async create(config: IConfig): Promise<Config>
  async getById(id: string): Promise<Config>
}

declare class SimpleService extends ApiService<ISimple> {}

/**
 * Endpoint export
 */
export { ConfigService, SimpleService, IConfig, ISimple, Config, Simple }
