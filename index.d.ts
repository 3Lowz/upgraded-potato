import { Entity } from '@mikro-orm/core'
import { MikroORM, EntityManager } from '@mikro-orm/mysql'

import libraryEntities from '@root/entities'
import { ConfigService } from '@root/services'

import { IConfig } from './src'
import { Config, IConfig } from './src/entities1'

/**
 * Library definition
 */
declare module '@3lowz/upgraded-potato' {
  export { ConfigService, IConfig, Config }
  export { libraryEntities as default }
}

/**
 * Services definitions
 */
declare class ApiService<T> {
  private db: MikroORM
  private em: EntityManager
  constructor(db: MikroORM): ApiService<T>
  async create(data: T): Promise<T> // fix Type
  async update(typeId: string, data: Type): Promise<T>
  async delete(typeId: string): Promise<boolean>
  async getList(pagination?: IPagination): Promise<T[]>
  async getById(typeId: string): Promise<T>
}

declare class ConfigService {
  //extends ApiService<IConfig> {
  private em: EntityManager
  async create(config: IConfig): Promise<Config>
  async getById(id: string): Promise<Config>
}

/**
 * Endpoint export
 */
export { ConfigService, IConfig, Config }
