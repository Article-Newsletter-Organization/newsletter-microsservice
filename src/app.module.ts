import { Module } from '@nestjs/common';
import { NewsletterModule } from './core/modules/newsletter.module';
import { PrismaModule } from './externals/modules/prisma.module';
import { EmailModule } from './core/modules/email.module';
import { UserApiModule } from './externals/modules/userapi.module';
import { EmailApiModule } from './externals/modules/emailapi.module';

const coreImports = [NewsletterModule, EmailModule];
const externalImports = [PrismaModule, UserApiModule, EmailApiModule];
@Module({
  imports: [...coreImports, ...externalImports],
})
export class AppModule {}
