# Upgraded-Potato
 a github random name

### Description
A starter kit template for library development using:
 - [Typescript](https://www.typescriptlang.org/docs/)
 - [MikroOrm](https://mikro-orm.io/docs/quick-start)
 - [Jest](https://jestjs.io/docs/getting-started)
 ---
 - [TODOs](#todos)

## Initial steps

In project folder run:

1.

```bash
npm i
```

2.  Edit properly your configurations:

```bash
vi .env.test
```

3.  Drops&Creates the database:

```bash
npx mikro-orm schema:fresh --run
```

or

```bash
npm run initdb
```

4.  Run existing tests:

```bash
npm test
```

## Configurations

 > MikroORM debug
 - edit the global variable in `src/mikro-orm.config.ts`
```typescript
const DEBUG = true
```

## TODOs
 - [ ] : Upgrade libraries
 - [ ] : Integrate webpack
 - [ ] : Add rxjs API example
 - [ ] : Create extendable API base class
 - [ ] : Add redis-json examples
 - [ ] : Remove all WIP copy/paste
