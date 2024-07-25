import Config from './config.entity'
import Simple from './simple.entity'
import UUID from './uuid.abstract.entity'

const libraryEntities = [UUID, Config, Simple]

export default libraryEntities

// Exporting types/interfaces
export * from './config.entity'
export * from './simple.entity'
export * from './uuid.abstract.entity'
