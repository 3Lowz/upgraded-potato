# Upgraded-Potato

a github random name (I liked)

### Description

A starter-kit template for library development using
[Typescript](https://www.typescriptlang.org/docs/) & [MikroOrm](https://mikro-orm.io/docs/quick-start).
It aim's to modularize development with web-server agnostic approach, that may not always fit as a best solution (eg: using framework methods), but allow complex db structures to be modularized and encapsulate modules logics like libraries composition.

##### Notes

The usage of the new optional parameter [cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#cause) in the line below

```typescript
throw new Error(`A Database connection must be specified`, { cause: { statusCode: 500 } })
```

is a voluntary choice to allow a "behind the scene" communication with the web-server in use.

It has been tested using fastify within the `fastify.setErrorHandler` method to properly set the statusCode of the `http.request`

### Tools

[Jest](https://jestjs.io/docs/getting-started) - [EsLInt](https://eslint.org/docs/latest/) - [Prettier](https://prettier.io/docs/en/) - [Webpack](https://webpack.js.org/concepts/) - [Docker](https://docs.docker.com/compose/)

## Initial steps

```bash
npm i
vi .env.test # Working defaults with docker-compose
docker-compose up -d
npm run initdb
npm test
```

## Configurations

> MikroORM debug

- edit the global variable in `src/mikro-orm.config.ts`

```typescript
6: const DEBUG = true
```

## TODOs

- [x] : Integrate webpack
- [ ] : Complete prod/dev configurations
- [ ] : Add rxjs API example
- [x] : Create extendable API base class
- [ ] : Add redis-json examples
- [x] : Remove all WIP copy/paste
- [ ] : Integrate TypeORM examples
