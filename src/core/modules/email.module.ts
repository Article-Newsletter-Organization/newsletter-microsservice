import { Global, Module } from '@nestjs/common';
import { EmailController } from 'src/controllers/email/email.controller';
import { EmailService } from 'src/core/usecases/email/email.service';
import { EmailApiService } from 'src/externals/emailApi/email-api.service';
import { PrismaNewsletterRepositoryService } from 'src/externals/prisma/prisma-newsletter-repository.service';
import { UserApiMockService } from 'src/externals/userApiMock/user-api-mock.service';

@Global()
@Module({
  controllers: [EmailController],
  providers: [
    EmailService,
    {
      provide: 'NewsletterRepository',
      useClass: PrismaNewsletterRepositoryService,
    },
    {
      provide: 'EmailProviderService',
      useClass: EmailApiService,
    },
    {
      provide: 'UserProviderService',
      useClass: UserApiMockService,
    },
  ],
})
export class EmailModule {}
