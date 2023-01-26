"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../models/server"));
describe("GET /", () => {
    test("should return 200 OK", () => __awaiter(void 0, void 0, void 0, function* () {
        // Crea una nueva instancia del servidor
        const Se = new server_1.default();
        // Inicia el servidor
        Se.listen();
        // Utiliza supertest para hacer una solicitud GET a la ruta "/api/repositories"
        const response = yield (0, supertest_1.default)(Se.app).get("/api/repositories").send();
        // Compara el código de estado de la respuesta con 200
        expect(response.statusCode).toBe(200);
        // Detiene el servidor
    }));
});
//# sourceMappingURL=app.spec.js.map