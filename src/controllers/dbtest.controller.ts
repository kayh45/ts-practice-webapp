import * as express from 'express';
import * as mysql from 'mysql';
import { Request, Response} from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';

class DBtestController implements IControllerBase {
  public path = '/dbtest';
  public router = express.Router();
  
  private connectionString = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'test'
  };
  
  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, this.index);
    this.router.post(this.path + '/exe_add', this.exe_add);
  }

  exe_add = (req: Request, res: Response) => {

    let name = req.body.name;
    let email = req.body.email;
    let conn = mysql.createConnection(this.connectionString);

    conn.connect();
    conn.query("insert into users (name, email) values (?, ?)", [name, email], (err, result, fields) => {

      if(err) throw err;

      console.log('Successfully saved');

      res.redirect('/dbtest');

    });
    conn.end();
  }

  index = (req: Request, res: Response) => {

    let conn = mysql.createConnection(this.connectionString);

    let data: any = {
      title: 'This is a DB Test Page.'
    };
    
    conn.connect();
    conn.query("select * from users", (err, rows, fields) => {
      let users : Array<[number, string, string]> = [];

      if(err) throw err;
      rows.forEach((el: [number, string, string]) => {
        users.push(el);
        console.log(el);
      });

      data.users = users;
      res.render('dbtest/index', { data } );
    });
    conn.end();
  }
}

export default DBtestController;

