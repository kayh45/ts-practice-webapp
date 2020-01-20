import App from './App';

import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';

import HomeController from './controllers/home.controller';
import DBtestController from './controllers/dbtest.controller';


const app = new App({
  port: 3000,
  controllers: [
    new HomeController(),
    new DBtestController(),
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true}),
    loggerMiddleware
  ]
});


app.listen();