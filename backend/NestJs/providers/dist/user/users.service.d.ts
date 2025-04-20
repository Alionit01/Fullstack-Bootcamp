import { User } from './user.interface';
export declare class UsersService {
    private users;
    getUser(id: number): User | {
        massage: string;
    };
    findOne(id: number): User;
    createUser(user: {
        name: string;
        email: string;
    }): User;
    updateUser(id: number, userDto: Partial<User>): User | {
        massage: string;
    };
    deleteUser(id: number): string;
}
