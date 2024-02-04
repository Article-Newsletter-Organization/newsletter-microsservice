import { Global, Module } from '@nestjs/common';
import { EmailApiService } from '../emailApi/email-api.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Global()
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        port: Number.parseInt(process.env.MAILER_PORT),
        secure: false,
        auth: {
          user: process.env.MAILER_USERNAME,
          pass: process.env.MAILER_PASSWORD,
        },
        ignoreTLS: true,
      },
      defaults: {
        from: process.env.MAILER_USERNAME,
      },
    }),
  ],
  providers: [EmailApiService],
  exports: [EmailApiService],
})
export class EmailApiModule {}
