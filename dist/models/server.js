"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_handler_1 = __importDefault(require("../middlewares/error-handler"));
const repositories_1 = __importDefault(require("../routes/repositories"));
class Server {
    constructor() {
        this.apiPaths = {
            repositori: "/api/repositories",
        };
        this.app = (0, express_1.default)();
        this.port = "3004";
        this.milddlewares();
        this.routes();
    }
    milddlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(error_handler_1.default);
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.repositori, repositories_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map