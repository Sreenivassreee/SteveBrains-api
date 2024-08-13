import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Auth } from './model/auth.model';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { StudentAuthGuard } from 'apps/student/src/authentication/auth.guard';

@Resolver('Auth')
export class UserResolver {
  constructor(private authService: UserService) {}

  @Query((returns) => String)
  // @UseGuards(StudentAuthGuard)
  GetHelloWorld() {
    return this.authService.SendHelloWorld();
  }
}
