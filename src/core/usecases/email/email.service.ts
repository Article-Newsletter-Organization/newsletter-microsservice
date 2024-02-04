import { Inject, Injectable } from '@nestjs/common';
import { Email } from 'src/core/entities/Email';
import { User } from 'src/core/entities/User';
import { NewsletterRepository } from 'src/core/shared';
import { EmailProviderService } from 'src/core/shared/EmailProviderService';
import { UserProviderService } from 'src/core/shared/UsersProviderService';

@Injectable()
export class EmailService {
  @Inject('NewsletterRepository')
  private newsletterRepository: NewsletterRepository;

  @Inject('EmailProviderService')
  private emailProvider: EmailProviderService;

  @Inject('UserProviderService')
  private userProvider: UserProviderService;

  async sendEmails(): Promise<void> {
    const newsletter = await this.newsletterRepository.getAll();
    const newsletterUsersId = newsletter.map((data) => data.userId);
    const users = await this.userProvider.getUsersById(newsletterUsersId);

    users.map((user: User) => {
      // @TODO maybe should use .env property here maybe
      const email = new Email()
        .setTo(user.getEmail())
        .setFrom(process.env.MAILER_USERNAME)
        .setSubject('email teste')
        .setMessage('teste')
        .setProps({
          fromName: 'Lucas Martins',
        });

      this.emailProvider.send(email);
    });
  }
}
