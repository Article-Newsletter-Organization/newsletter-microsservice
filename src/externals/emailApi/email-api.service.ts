import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Email } from 'src/core/entities/Email';
import { EmailProviderService } from 'src/core/shared/EmailProviderService';

@Injectable()
export class EmailApiService implements EmailProviderService {
  constructor(private mailerService: MailerService) {}
  async send(email: Email): Promise<void> {
    await this.mailerService.sendMail({
      to: email.getTo(),
      from: email.getFrom(),
      subject: email.getSubject(),
      html: `<h3 style="color: red">${email.getMessage()}</h3>`,
    });
  }
}
