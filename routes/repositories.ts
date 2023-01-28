import { Router } from "express";
import { getCSV, getRepos } from "../controllers/repositories";

import validateQueryParams from "../middlewares/validate-queryparams";


const router = Router();

router.get("/",validateQueryParams, getRepos);
//getscv
router.get("/csv",validateQueryParams, getCSV);

export default router;
