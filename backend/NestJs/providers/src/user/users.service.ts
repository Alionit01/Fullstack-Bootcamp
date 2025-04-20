import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
    private users: User[] = [{id: 1, name: 'Ali', email: 'ada@gmail.com'}]
    
    //GET retriving user by id
    getUser(id: number): User | {massage: string}{
        return this.users.find((user) => user.id === id) || {massage: 'User not found'};
    }

    findOne(id: number){
        return this.users[id];
    }
    //POST cREATING USER
    createUser(user: {name: string, email: string}): User{
       const newUser: User = {id:this.users.length+1, ...user}; //create new user object
       this.users.push(newUser);
       return newUser;
    }

    //PATCH will partially update the user
    updateUser(id: number, userDto: Partial<User>): User | {massage: string} {  //one element can be updated bcus partial
        const user = this.users.find((user) => user.id === id);
        if (!user) return {massage: 'User not found'};

        Object.assign(user, userDto);
        return user;
    }
   

    deleteUser(id: number): string{
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            return 'User with id ${id} not found';
        }
        this.users.splice(index, 1);
        return 'User deleted successfully';
    }

    
}
