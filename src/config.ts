export class Config {
  constructor() {
    require('dotenv').config();
  }
  TEST = process.env.TEST || 'From config file';
  API_PORT = process.env.API_PORT || 8080;
  DEFAULT_USER = "sreenivas@stevebrains.com"
}
