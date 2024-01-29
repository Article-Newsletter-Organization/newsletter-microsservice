import { User } from '../entities/User';

export interface UserProviderService {
  getUsersById(usersId: string[]): Promise<User[]>;
}
