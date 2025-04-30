import { DataSource } from 'typeorm';
import { Users } from './user/entities/user.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pak1stani12',
  database: 'nest_db',
  synchronize: false,
  logging: true,
  entities: [Users],
  migrations: ['src/migrations/*.ts'],
});