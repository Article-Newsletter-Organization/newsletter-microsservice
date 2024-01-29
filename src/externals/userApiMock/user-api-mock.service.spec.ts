import { Test, TestingModule } from '@nestjs/testing';
import { UserApiMockService } from './user-api-mock.service';

describe('UserProviderService', () => {
  let service: UserApiMockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserApiMockService],
    }).compile();

    service = module.get<UserApiMockService>(UserApiMockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
