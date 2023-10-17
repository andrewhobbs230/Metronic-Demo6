import useTicketList from '../../../react-query/hooks/useTicketList'

const TicketList = () => {
  const {data: Ticket, error, isLoading} = useTicketList()

  if (error) return <p>{error.message}</p>
  if (isLoading)
    return (
      <div role='status' className='ms-2 spinner-border text-primary'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    )

  return (
    <div>
      <div className='table-responsive'>
        <table className='table mb-0'>
          <thead className='table-light'>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {Ticket?.map((Ticket) => (
              <tr>
                <td>{Ticket.id}</td>
                <td>{Ticket.description}</td>
                <td>{Ticket.ticketStatus.name}</td>
                <td>{Ticket.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TicketList
