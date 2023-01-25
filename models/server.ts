<<<<<<< HEAD
import express, { Application } from 'express';
import organizationRoutes from '../routes/organizations';
import tribesRoutes from '../routes/tribes';
import cors from 'cors';
import db from '../db/connection';
import './matric';
import './organization';
import './tribe';
import './usuario';
import './repository';
=======
import cors from 'cors';
import express, { Application } from 'express';
import errorHandler from '../middlewares/error-handler';
import repositoriRouter from '../routes/repositories';
// import errorHandler from '../middlewares/error-handler';
>>>>>>> e528cdd (servidor minulado)

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
<<<<<<< HEAD
    usuarios: '/api/usuarios',
    organizationPath: '/api/organizations',
    tribePath: '/api/tribes',
=======
    repositori: '/api/repositories',
>>>>>>> e528cdd (servidor minulado)
  };

  constructor() {
    this.app = express();
<<<<<<< HEAD
    this.port = process.env.PORT || '8000';

    this.dbConnection();
=======
    this.port = process.env.PORT || '8002';
>>>>>>> e528cdd (servidor minulado)

    this.milddlewares();

    this.routes();
  }

<<<<<<< HEAD
  async dbConnection() {
    try {
      await db.authenticate();
      // await db.sync();
      // await db.sync({ force: true });
      console.log('Database online');
    } catch (error: any) {
      throw new Error(error);
    }
  }

  milddlewares() {
    //CORS
    this.app.use(cors());
    this.app.use(express.json());
=======
  milddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(errorHandler);
>>>>>>> e528cdd (servidor minulado)
    this.app.use(express.static('public'));
  }

  routes() {
<<<<<<< HEAD
    this.app.use(this.apiPaths.organizationPath, organizationRoutes);
    this.app.use(this.apiPaths.tribePath, tribesRoutes);
=======
    this.app.use(this.apiPaths.repositori, repositoriRouter);
>>>>>>> e528cdd (servidor minulado)
  }

  listen() {
    this.app.listen(this.port, () => {
<<<<<<< HEAD
      console.log('Server running on port ' + this.port);
=======
      console.log(`Server running on port ${this.port}`);
>>>>>>> e528cdd (servidor minulado)
    });
  }
}

export default Server;
