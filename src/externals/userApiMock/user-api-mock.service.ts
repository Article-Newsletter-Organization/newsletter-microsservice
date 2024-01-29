import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities/User';
import { UserProviderService } from 'src/core/shared/UsersProviderService';

@Injectable()
export class UserApiMockService implements UserProviderService {
  createUsers() {
    return [new User(`User 1`, `newslettermicroserviceuser1@yopmail.com`)];
  }

  async getUsersById(usersId: string[]): Promise<User[]> {
    const users: User[] = this.createUsers();
    return users;
  }
}
