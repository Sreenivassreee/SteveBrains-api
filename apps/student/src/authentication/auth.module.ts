import { Module } from '@nestjs/common';
import { StudentAuthGuard } from './auth.guard';

@Module({
  imports: [],
  providers: [StudentAuthGuard],
})
export class AuthModule {}
