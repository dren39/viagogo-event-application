import React from 'react'
import { Header, Modal } from 'semantic-ui-react'

function EventDetail(props) {
  return (
    <Modal open={true} onClose={()=>props.toggleModal(false)} size='small' closeIcon className="show-card-animation">
      {/* when modal is closed invoke callback to toggle boolean in EventContainer state 
        on re-render ternary will return false and not render the Show component at all */}
      <Header textAlign={"center"}>{props.event.EventName} in {props.event.VenueCity}</Header>
      <Modal.Content>
          <p>Date: {props.event.CalendarViewModel.MonthName} {props.event.CalendarViewModel.DayOfMonth}, {props.event.CalendarViewModel.Year}</p>
          <p>Time: {props.event.Time}</p>
          <p>Venue: {props.event.VenueName}</p>
          <p>Price: {props.event.MinPrice}</p>
      </Modal.Content>
    </Modal>
  )
}

export default EventDetail;