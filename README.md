# NodeJS(Express) Typescript Starter

## Description

Quickly get started with a NodeJS(express) typescript project.

## Installation

1. Clone the repository: `git clone git@github.com:jyotirmaybarman/nodejs-typescript-starter.git`
2. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev`
2. Build the project: `npm run build`

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server
- `npm run build`: Build the project
- `npm run migration:generate --name=NAME_OF_MIGRATION`: Generate a new migration
- `npm run migration:deploy`: Run pending migrations
- `npm run migration:undo`: Undo the last migration

## Dependencies

The following packages are installed and configured:

* `cache-manager`: A cache management library for Node.js.
* `cache-manager-ioredis-yet`: A Redis store for cache-manager.
* `cookie-parser`: A middleware for parsing cookies in Express.js.
* `dotenv`: A library for loading environment variables from a `.env` file.
* `http-errors`: A library for creating HTTP errors.
* `pg`: A PostgreSQL driver for Node.js.
* `reflect-metadata`: A library for working with metadata in TypeScript.
* `tsconfig-paths`: A library for resolving TypeScript paths.
* `typeorm`: An Object-Relational Mapping (ORM) library for TypeScript.
* `zod`: A validation library for TypeScript.

## Dev Dependencies

The following packages are installed as dev dependencies:

* `nodemon`: A tool for monitoring and restarting Node.js applications.
* `ts-node`: A TypeScript execution environment.
* `typescript`: The TypeScript compiler.

## License

This project is licensed under the [MIT License](LICENSE).