"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRepos = (req, res) => {
    const repositories = [
        { id: 1, state: 604 },
        { id: 2, state: 605 },
        { id: 3, state: 606 },
    ];
    res.json(repositories);
};
exports.default = getRepos;
//# sourceMappingURL=repositories.js.map