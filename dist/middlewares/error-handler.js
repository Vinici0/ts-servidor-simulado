"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).send({ error: 'Server error' });
};
exports.default = errorHandler;
//# sourceMappingURL=error-handler.js.map