import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Auth } from './model/auth.model';
import { AuthService } from './auth.service';
import { Config } from 'src/config';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query((returns) => String)
  GetHelloWorld() {
    return this.authService.SendHelloWorld();
  }
}
