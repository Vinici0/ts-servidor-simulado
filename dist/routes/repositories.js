"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repositories_1 = __importDefault(require("../controllers/repositories"));
const validate_queryparams_1 = __importDefault(require("../middlewares/validate-queryparams"));
const router = (0, express_1.Router)();
router.get("/", validate_queryparams_1.default, repositories_1.default);
exports.default = router;
//# sourceMappingURL=repositories.js.map