import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { NewsletterService } from '../../core/usecases/newsletter/newsletter.service';

describe('EmailController', () => {
  let controller: EmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [NewsletterService],
    }).compile();

    controller = module.get<EmailController>(EmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
