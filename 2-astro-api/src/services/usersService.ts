import { User } from '../models/user';

const users: User[] = [];

export class UserService {
  static createUser(nickname: string, zodiacSign: string, plan: 'basic' | 'premium'): User {
    const newUser: User = { nickname, zodiacSign, plan };
    users.push(newUser);

    return newUser;
  }

  static getUsers(): User[] {
    return users;
  }

  static getUserByNickname(nickname: string): User | undefined {
    const foundUsers = users.find((u) => u.nickname === nickname);

    return foundUsers;
  }
}
