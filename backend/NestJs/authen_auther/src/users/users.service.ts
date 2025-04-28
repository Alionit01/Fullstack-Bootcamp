import { Injectable } from '@nestjs/common';
import { Users } from './user.entity';

@Injectable()
export class UsersService {
    private readonly users : Users []=[
        {
          username: 'user1',
          password: 'ali',
          gmail: 'user1@gmail.com'
        },
        {
            username: 'user2',
            password: 'ali',
            gmail: 'user2@gmail.com'
          },
          {
            username: 'user3',
            password: 'ali',
            gmail: 'user3@gmail.com'
          },
      ];

      getUserByUserName(username: string): Users | undefined {
        return this.users.find(user => user.username === username);
    }
    
}
