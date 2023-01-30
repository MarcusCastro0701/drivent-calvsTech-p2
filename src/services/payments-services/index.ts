import paymentsRepository from "@/repositories/payments-repository";
import { notFoundError } from "@/errors";
import { TicketTypeId } from "@/protocols";

export async function getPayment(ticketId: number){

    const get = await paymentsRepository.payments(ticketId);

}

const paymentsServices = {
    getPayment,
}

export default paymentsServices