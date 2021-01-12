
import { createConnection } from 'typeorm';
//
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mssql',
      host: 'LAPTOP-PQH9GV4C',
      port: 1433,
      username: 'sa',
      password: 'elirweb',
      database: 'ChatCQRS',
      entities: [
          __dirname + '/../**/*.Entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];