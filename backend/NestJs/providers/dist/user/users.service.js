"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [{ id: 1, name: 'Ali', email: 'ada@gmail.com' }];
    getUser(id) {
        return this.users.find((user) => user.id === id) || { massage: 'User not found' };
    }
    findOne(id) {
        return this.users[id];
    }
    createUser(user) {
        const newUser = { id: this.users.length + 1, ...user };
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id, userDto) {
        const user = this.users.find((user) => user.id === id);
        if (!user)
            return { massage: 'User not found' };
        Object.assign(user, userDto);
        return user;
    }
    deleteUser(id) {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            return 'User with id ${id} not found';
        }
        this.users.splice(index, 1);
        return 'User deleted successfully';
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map