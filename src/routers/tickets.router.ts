import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketsType, getTickets, postTickets } from "@/controllers";
import { ticketSchema } from "@/schemas";

const ticketsrouter = Router();

ticketsrouter
    .get("/types", authenticateToken, getTicketsType)
    .get("/", authenticateToken, getTickets)
    .post("/", authenticateToken, validateBody(ticketSchema), postTickets)

export { ticketsrouter };