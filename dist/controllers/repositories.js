"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCSV = exports.getRepos = void 0;
const fs_1 = __importDefault(require("fs"));
//json2csv
const json2csv_1 = require("json2csv");
const repositories = [
    { id: 1, state: 604 },
    { id: 2, state: 605 },
    { id: 3, state: 606 },
];
const getRepos = (req, res) => {
    res.json(repositories);
};
exports.getRepos = getRepos;
const getCSV = (req, res) => {
    const fields = ['id', 'state'];
    const opts = { fields };
    try {
        const parser = new json2csv_1.Parser(opts);
        const csv = parser.parse(repositories);
        if (!fs_1.default.existsSync('csv')) {
            fs_1.default.mkdirSync('csv');
        }
        fs_1.default.writeFileSync('csv/repositories.csv', csv);
        res.setHeader('Content-Type', 'text/csv');
        res.status(200).send(csv);
    }
    catch (err) {
        console.error(err);
    }
};
exports.getCSV = getCSV;
//# sourceMappingURL=repositories.js.map