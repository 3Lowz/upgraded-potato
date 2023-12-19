# Upgraded-Potato

> a github random name

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

3.  Creates/Drops the database:

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
