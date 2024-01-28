import { Module } from '@nestjs/common';
import { NewsletterService } from '../../core/usecases/newsletter.service';
import { NewsletterController } from '../controllers/newsletter.controller';
import { PrismaNewsletterRepositoryService } from '../prisma/prisma-newsletter-repository.service';

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
