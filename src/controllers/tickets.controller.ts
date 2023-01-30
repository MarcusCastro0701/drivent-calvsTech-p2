import { AuthenticatedRequest } from "@/middlewares";
import ticketsServices from "@/services/tickets.service";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { TicketTypeId } from "@/protocols";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {

    try {
        const get = await ticketsServices.ticketsTypes();
        return res.status(httpStatus.OK).send(get);
    } catch (error) {
        console.log(error);
        return
    }

}

export async function getTickets(req: AuthenticatedRequest, res: Response){

    try {
        const get = await ticketsServices.tickets();
        
        if(get.length === 0){
            return res.sendStatus(404)
        }
        return res.status(200).send(get[0]);
    } catch (error) {
        console.log(error)
        return 
    }

}

export async function postTickets(req: AuthenticatedRequest, res: Response){

    const body = req.body as TicketTypeId
    const userId = req.userId 
    
    const id = Number(userId)

    try {
        const post = await ticketsServices.insertTickets(body, id);
        if(!post){
            res.sendStatus(404);
            return
        }
        res.status(201).send(post)
    } catch (error) {
        
        return error
    }

}