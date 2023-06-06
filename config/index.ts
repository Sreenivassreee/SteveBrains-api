import * as dotenv from 'dotenv';
dotenv.config();
const configFromProcess = {
    TEST: process.env.TEST || 'From config file',
    API_PORT : process.env.API_PORT || 8080,
    IDENTITY_APP_URL:process.env.IDENTITY_APP_URL||'http://localhost:9000'
}
export const appSettings = { ...configFromProcess, ...dotenv.config().parsed }; 
