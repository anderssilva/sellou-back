import { Sequelize } from 'sequelize-typescript';
import { User } from './src/user/user.entity';
import { Client } from './src/presentation/client/client.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'sellou-database-local',
      });
      sequelize.addModels([User, Client]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
