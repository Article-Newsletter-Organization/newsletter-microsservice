import { Test, TestingModule } from '@nestjs/testing';
import { PrismaNewsletterRepositoryService } from './prisma-newsletter-repository.service';

describe('PrismaNewsletterRepositoryService', () => {
  let service: PrismaNewsletterRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaNewsletterRepositoryService],
    }).compile();

    service = module.get<PrismaNewsletterRepositoryService>(
      PrismaNewsletterRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
