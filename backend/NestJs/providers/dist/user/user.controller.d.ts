import { UsersService } from 'src/user/users.service';
import { User } from './user.interface';
export declare class UserController {
    private usersService;
    constructor(usersService: UsersService);
    getUser(id: number): User | {
        massage: string;
    };
    userUpdate(id: number, updateUserDto: Partial<User>): User | {
        massage: string;
    };
    createUser(newUser: {
        name: string;
        email: string;
    }): User;
    updateUser(id: string, updateUserDto: {
        new: string;
        email: string;
    }): User | {
        massage: string;
    };
    deleteUser(id: string): string;
}
