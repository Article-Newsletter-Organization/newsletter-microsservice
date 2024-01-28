import { Injectable } from '@nestjs/common';
import { UseCase } from '../shared/useCase';
import { User } from '../entities/user';
import { NewsletterRepository } from '../shared';

@Injectable()
export class AddUserOnNewsLetter implements UseCase<User, void> {
  constructor(private readonly repository: NewsletterRepository) {}

  async execute(user: User): Promise<void> {
    await this.repository.add(user);
  }
}
