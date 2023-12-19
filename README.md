# Library Template(change with name)

### Scope

Provide a basic template for library development (!!ChangeMe!! with description)

---

[TODOs](#todos)

---

## Initial steps

In project folder run:

Edit properly your configurations [full_list](#configs) :

-     cp .env.example .env.testing .env.development

Creates/Drops the database:

-     npx mikro-orm schema:fresh --run

-     npm run initdb

Run existing tests:

-     npm test

## Explanations

> `.env.example` Required library env KEYS with no data

> `.env.test` Used by the command `npm test`

> `.env.testing` Useb by `npm test:ci`

> `.env.development` Used by `npm run initdb` and other development commands

## Great you are ready to go!

---

# Details

## Entities

> Describe you entity here

```ts
{
   imestampSchema,         // Sets created_at , updated_at unix timestamp to table
   uuidSchema,             // Sets uuid preSave hook
   timestampUUIDSchema,    // Both timestamp and uuid Schema
   User,                   // Example userSchema
   Group,                  // Example groupSchema
}
```

## Services

> Describe your services here

```ts
{
   ApiService<Type extends object>,       // Interface class for API Services
   InternalService,                       // Showcase service to delete!
   PaginationService,                     // Pagination showcase
   TableService,                          // Basic extended API service for table
   UserService                            // Basic extended API service for users
}
```

- ### ApiService<Type extends object>

  Base class used to create API Service based classes

- ### UserService / TableService

  Services created using ApiService class

- ### Pagination Service

  Example service to test Pagination decorator

## Miscellaneous

Describe your utils / decorators here

> PaginationDecorator
>
> ```ts
>  import Pagination from './../utils/pagination.decorator'
>
>  interface IPagination // index.d
>
>  @Pagination  // Injects the queryParams to allow pagination handling
>  async method(..., queryParams: IPagination): Promise<T> {}
> ```

---

# Configs

1.  Clone this repo

2.  In the `package.json` file edit the `name`, `version` and `description` properties

3.  In the `index.d.ts` file edit the `@adm-3/library-template` name and declare class interfaces

4.  Edit names and projectId accondingly in `.npmrc` and `package.json`

5.  ( _if remote is manually handled_ ) Remove the remote and url and set the new one

    > `git remote remove origin`

    ***

    > `git remote set-url origin <net-git-remote-url>`

6.  Run `npm link` to allow usage of the library in other modules

7.  Develop!!

## Usage for development

1. Clone the repo

2. Copy `env.example` to `.env` and edit it properly

3. Run `npx mikro-orm schema:fresh --run`

4. Run `npm test`

5. Enjoy TDD!

# How to deploy

- Uncomment `.gitlab-ci.yml`
- Configure `publishConfig: {url}` in `package.json` with proper `projectId`
- Check `.npmrc`
<<<<<<< HEAD
- Deploy on `master`
=======
- Push on `master`
>>>>>>> 885e8c241d027e4d9f3fee341ac2f4a8c6c08f4f

## Features

-     npm test || npm run test:watch
-     npm run test:h  # detectcs open handlers
-     npm run test:ci  # uses gitlab-runner docker image to simulate CI tests
-     npm run list --link=true  # lists linked packages
-     npm run lint  # lints the code

---

# TODOs

- [ ] : Fix jsdoc + ts usage
- [-] : Write down essential steps to follow at startup time
<<<<<<< HEAD
=======
- [ ] : Implement UTL and GLO to include proper pagination/filtering
>>>>>>> 885e8c241d027e4d9f3fee341ac2f4a8c6c08f4f

## Backlog

> docker run --entrypoint bash --rm -w $PWD -v $PWD:$PWD -v /var/run/docker.sock:/var/run/docker.sock gitlab/gitlab-runner:latest -c 'git config --global --add safe.directory "\*";gitlab-runner exec docker test'
> If you have `gitlab-runner` installed along with `docker` you can run:

`docker run --entrypoint bash --rm -w $PWD -v $PWD:$PWD -v /var/run/docker.sock:/var/run/docker.sock gitlab/gitlab-runner:latest -c 'gitlab-runner exec docker <command_job>'`
