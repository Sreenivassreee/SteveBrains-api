// import  appSettings  from 'config';

import { appSettings } from "config";

export class UserService {
  SendHelloWorld() {
    const { TEST } = appSettings;
    console.log(appSettings)
    return TEST;
  }
}
