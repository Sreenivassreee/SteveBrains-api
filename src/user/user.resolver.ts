import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Auth } from './model/auth.model';
import { UserService } from './user.service';
import { Config } from 'src/config';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/authentication/auth.guard';

@Resolver('Auth')
export class UserResolver {
  constructor(private authService: UserService) {}

  @Query((returns) => String)
  @UseGuards(new AuthGuard)
  GetHelloWorld() {
    return this.authService.SendHelloWorld();
  }
}
