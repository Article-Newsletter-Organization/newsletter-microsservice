import { Controller, Post } from '@nestjs/common';
import { EmailService } from 'src/core/usecases/email/email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async sendEmails() {
    return await this.emailService.sendEmails();
  }
}
