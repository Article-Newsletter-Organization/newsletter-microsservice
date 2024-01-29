import { Global, Module } from '@nestjs/common';
import { EmailApiService } from '../emailApi/email-api.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { env } from 'process';
env;
@Global()
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.mailgun.org', //host smtp
        secure: false, //regras de segurança do serviço smtp
        port: 587, // porta
        auth: {
          //dados do usuário e senha @TODO need to be in the .env file
          user: 'postmaster@sandbox9b03bed99c26409b81452f923bd00ee1.mailgun.org',
          pass: '9f66a38ecaee913a99ac82744062bb74-063062da-1c7dc073',
        },
        ignoreTLS: true,
      },
      defaults: {
        // configurações que podem ser padrões
        from: '"',
      },
    }),
  ],
  providers: [EmailApiService],
  exports: [EmailApiService],
})
export class EmailApiModule {}
