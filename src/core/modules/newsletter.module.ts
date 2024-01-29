import { Module } from '@nestjs/common';
import { NewsletterService } from '../usecases/newsletter/newsletter.service';
import { NewsletterController } from '../../controllers/newsletter/newsletter.controller';
import { PrismaNewsletterRepositoryService } from '../../externals/prisma/prisma-newsletter-repository.service';

@Module({
  controllers: [NewsletterController],
  providers: [
    NewsletterService,
    {
      provide: 'NewsletterRepository',
      useClass: PrismaNewsletterRepositoryService,
    },
  ],
})
export class NewsletterModule {}
