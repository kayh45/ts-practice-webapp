import * as express from 'express';
import { Request, Response} from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';

class HomeController implements IControllerBase {
  public path = '/user';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/user', this.index);
  }

  index = (req: Request, res: Response) => {
    let data :any = {
      hello: 'Hello World!'
    };

    data.name = 'Hyeon';

    res.render('index', { data } );
  }
}

export default HomeController;

