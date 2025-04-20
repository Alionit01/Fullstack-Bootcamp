export declare class UsersService {
    private users;
    findAll(): string[];
    findOne(id: number): string;
    createUser(name: string): string;
    updateUser(id: number, name: string): string;
    deleteUser(id: number): string[];
}
