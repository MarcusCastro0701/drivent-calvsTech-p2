import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import {  } from "@/controllers";
import {  } from "@/schemas";

const paymentsrouter = Router();

paymentsrouter
    .get("/", authenticateToken,)

export { paymentsrouter };