import { Global, Module } from '@nestjs/common';
import { UserApiMockService } from 'src/externals/userApiMock/user-api-mock.service';

@Global()
@Module({
  providers: [UserApiMockService],
  exports: [UserApiMockService],
})
export class UserApiModule {}
