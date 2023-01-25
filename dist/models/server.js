"use strict";
<<<<<<< HEAD
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
=======
>>>>>>> e528cdd (servidor minulado)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const express_1 = __importDefault(require("express"));
const organizations_1 = __importDefault(require("../routes/organizations"));
const tribes_1 = __importDefault(require("../routes/tribes"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
require("./matric");
require("./organization");
require("./tribe");
require("./usuario");
require("./repository");
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            organizationPath: '/api/organizations',
            tribePath: '/api/tribes',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Conectar a base de datos
        this.dbConnection();
        //Definir middlewares
        this.milddlewares();
        //Definir rutas
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                // await db.sync();
                // await db.sync({ force: true });
                console.log('Database online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    //Son funciones que se ejecutan antes de que lleguen a las rutas
    milddlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Lectura y parseo del body
        this.app.use(express_1.default.json());
        //Directorio publico
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.organizationPath, organizations_1.default);
        this.app.use(this.apiPaths.tribePath, tribes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ' + this.port);
=======
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const error_handler_1 = __importDefault(require("../middlewares/error-handler"));
const repositories_1 = __importDefault(require("../routes/repositories"));
// import errorHandler from '../middlewares/error-handler';
class Server {
    constructor() {
        this.apiPaths = {
            repositori: '/api/repositories',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8002';
        this.milddlewares();
        this.routes();
    }
    milddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(error_handler_1.default);
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.repositori, repositories_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
>>>>>>> e528cdd (servidor minulado)
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map