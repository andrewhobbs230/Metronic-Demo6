/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import useTicketList from '../../../../react-query/hooks/useTicketList'

type Props = {
  className: string
}

const TablesWidget11: React.FC<Props> = ({className}) => {
  const {data: Ticket, error, isLoading} = useTicketList()

  if (error) return <p>{error.message}</p>
  if (isLoading)
    return (
      <div role='status' className='ms-2 spinner-border text-primary'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>New Arrivals</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 new products</span>
        </h3>
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTIcon iconName='plus' className='fs-2' />
            New Member
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-325px rounded-start'>Ticket Id</th>
                <th className='min-w-125px'>Description</th>
                <th className='min-w-125px'>Created Date</th>
                <th className='min-w-200px'>Location</th>
                <th className='min-w-150px'>Status</th>
                <th className='min-w-200px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {Ticket?.map((Ticket) => (
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>
                        <img
                          src={toAbsoluteUrl('/media/stock/600x400/img-26.jpg')}
                          className=''
                          alt=''
                        />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          {Ticket.id}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                      {Ticket.description}
                    </span>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      {Ticket.creationDate}
                    </a>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      {Ticket.locations.name}
                    </a>
                  </td>
                  <td>
                    <span className='badge badge-light-primary fs-7 fw-semibold'>
                      {Ticket.ticketStatus.name}
                    </span>
                  </td>
                  <td className='text-end'>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTIcon iconName='switch' className='fs-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTIcon iconName='pencil' className='fs-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTIcon iconName='trash' className='fs-3' />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget11}
