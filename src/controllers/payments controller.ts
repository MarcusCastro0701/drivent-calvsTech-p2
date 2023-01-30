import { AuthenticatedRequest } from "@/middlewares";
import paymentsServices from "@/services/payments-services";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { TicketTypeId } from "@/protocols";


export async function findPayment(req: AuthenticatedRequest, res: Response){

    const id = req.query

    const ticketId = Number(id)

    try {
        const get = paymentsServices.getPayment(ticketId)
    } catch (error) {
        
    }

}