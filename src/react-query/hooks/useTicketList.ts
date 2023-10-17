import { useQuery } from "react-query";
import apiClient from "../../services/api-client";
import { Ticket } from "../../entities/Ticket";


  const useTicketList = () => {
    const fetchTickets = () => 
    apiClient
      .get('/getopenforlocation/51', 
      )
      .then(res => res.data)
    
      return useQuery<Ticket[], Error>({
        queryKey: ['ticketList'],
        queryFn: fetchTickets,
        staleTime: 10 * 1000 //10 seconds
      })
  
}


  export default useTicketList;