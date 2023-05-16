import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [AuthModule],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
