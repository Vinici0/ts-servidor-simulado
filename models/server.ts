import express, { Application } from 'express';
import cors from 'cors';
import errorHandler from '../middlewares/error-handler';
import routerRepositories from '../routes/repositories';


class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    repositori: '/api/repositories',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8002';
    this.milddlewares();
    this.routes();
  }

  milddlewares() {
    //CORS
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(errorHandler);
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.repositori, routerRepositories);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
