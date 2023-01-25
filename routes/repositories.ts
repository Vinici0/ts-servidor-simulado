import { Router } from "express";
import getRepos from "../controllers/repositories";
import validateQueryParams from "../middlewares/validate-queryparams";

const router = Router();

router.get("/",validateQueryParams, getRepos);

export default router;
