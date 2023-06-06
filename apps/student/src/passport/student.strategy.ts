import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { AuthService } from 'apps/student/src/services/auth.service';


@Injectable()
export class StudentStrategy extends PassportStrategy(Strategy, 'student') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(req: Request): Promise<any> {
    const values = (req.headers['authorization'] || '').split(' ');
    const token = values?.length > 0 ? values[1] : '';

    if (!token) {
      throw new UnauthorizedException();
    }

    const response = await this.authService.validateStudentToken(token);
    req['user'] = response['data'];
    return response['data'];
  }
}