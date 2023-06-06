import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { appSettings } from 'config';

const { IDENTITY_APP_URL } = appSettings;

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async validateCmsToken(token: string) {
    return await this.httpService
      .post<any>(`${IDENTITY_APP_URL}/cms/verify-token`, { token: token })
      .toPromise();
  }

  async validateStudentToken(token: string) {
    return await this.httpService
      .post<any>(`${IDENTITY_APP_URL}/student/verify-token`, { token: token })
      .toPromise();
  }

  async validateCrmToken(token: string) {
    return await this.httpService
      .post<any>(`${IDENTITY_APP_URL}/crm/verify-token`, { token: token })
      .toPromise();
  }

  async validatePartnerToken(token: string) {
    return await this.httpService
      .post<any>(`${IDENTITY_APP_URL}/partner/verify-token`, { token: token })
      .toPromise();
  }
}
