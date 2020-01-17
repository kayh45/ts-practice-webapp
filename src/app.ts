import express from 'express';
import { Application } from 'express';
import path from 'path';

class App {
  public app: Application;
  public port: number;

  constructor(appInit: {port: number; middleWares: any; controllers: any}) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.asset();
    this.template();
  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void;}) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare);
    })
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void;}) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    })
  }

  private asset() {
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  private template() {
    this.app.set('view engine', 'pug');
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    })
  }
}

export default App;
