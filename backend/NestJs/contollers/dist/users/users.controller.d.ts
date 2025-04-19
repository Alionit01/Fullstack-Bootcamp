export declare class UsersController {
    findAll(): string[];
    findOne(id: String): string;
    create(body: any): {
        massage: string;
        user: any;
    };
    updateUser(id: string): string;
    updatepartial(id: string, body: any): {
        massage: string;
        changes: any;
    };
    deleteUser(id: string): string;
}
