import ticketsRepository from "@/repositories/tickets-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { notFoundError } from "@/errors";
import { TicketTypeId } from "@/protocols";

async function ticketsTypes(){

    const result = await ticketsRepository.retrieveTypes()
    
    return result

}

async function tickets(){

    
    const result = await ticketsRepository.retrieveTickets()
    
    return result

}

async function insertTickets(body: TicketTypeId, id: number){
    
    const enrollment = await enrollmentRepository.findByUserId(id)
    if(!enrollment){
        return
    }
    const enrollmentId = enrollment.id

    const result = await ticketsRepository.insertOne(body, enrollmentId)

    return result

}

const ticketsServices = {
    ticketsTypes,
    tickets,
    insertTickets,
};

export default ticketsServices