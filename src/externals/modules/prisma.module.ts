import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaNewsletterRepositoryService } from '../prisma/prisma-newsletter-repository.service';

@Global()
@Module({
  providers: [PrismaNewsletterRepositoryService, PrismaService],
  exports: [PrismaNewsletterRepositoryService, PrismaService],
})
export class PrismaModule {}
