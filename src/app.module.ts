import { Module } from '@nestjs/common';
import { NewsletterModule } from './externals/modules/newsletter.module';
import { PrismaModule } from './externals/modules/prisma.module';

@Module({
  imports: [NewsletterModule, PrismaModule],
})
export class AppModule {}
