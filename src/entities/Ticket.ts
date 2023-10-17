

export interface TicketStatus{
    id: number,
    name: string
}

export interface Locations{
    id: number,
    name: string
}

export interface Ticket {
    id: number;
    description: string;
    ticketStatusId: number;
    creationDate: string;
    ticketStatus: TicketStatus;
    locationsId: number;
    locations: Locations;


  }