import { prisma } from "@/config";
import { TicketTypeId } from "@/protocols";


async function retrieveTypes(){

    const get = await prisma.ticketType.findMany();
    return get

}

async function retrieveTickets(){

  const get = await prisma.ticket.findMany({
    include: {
      TicketType: true,
    }
  })

  return get

}


async function insertOne(body: TicketTypeId, enrollmentId: number){

const post = await prisma.ticket.create({
  data: {
    TicketType: {
      connect: {id: body.ticketTypeId}
    },
    Enrollment: {
      connect: {id: enrollmentId}
    },
    status: "RESERVED"
},
  include: {
    TicketType: true
  }
})



return post


}

  const ticketsRepository = {
    retrieveTypes,
    retrieveTickets,
    insertOne,
  };

  export default ticketsRepository