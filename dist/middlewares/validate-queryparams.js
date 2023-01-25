"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Validación de parámetros de consulta: Para validar los parámetros de consulta, puedes utilizar un middleware de validación.
Crea una función que valide los parámetros de consulta y, si hay algún error, envíe un código de estado HTTP 400 y un mensaje de error claro al cliente.
*/
const validateQueryParams = (req, res, next) => {
    const state = req.query.state;
    if (state !== undefined && ![604, 605, 606].includes(Number(state))) {
        return res.status(400).send({ error: 'Invalid state parameter' });
    }
    next();
};
exports.default = validateQueryParams;
//# sourceMappingURL=validate-queryparams.js.map