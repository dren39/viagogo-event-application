import React from 'react'
import { Header, Modal, Icon } from 'semantic-ui-react'

function EventDetail(props) {
  return (
    <Modal open={true} onClose={()=>props.toggleModal(false)} size='small' closeIcon className="show-card-animation">
      {/* when modal is closed invoke callback to toggle boolean in EventContainer state 
        on re-render ternary will return false and not render the Show component at all */}
      <Header textAlign={"center"}>{props.event.EventName} in {props.event.VenueCity}</Header>
      <Modal.Content>
          <p><Icon name="calendar"/>{props.event.Day}, {props.event.Date}</p>
          <p><Icon name="clock"/>{props.event.Time}</p>
          <p><Icon name="map"/>{props.event.VenueName}</p>
          <p><Icon name="money"/> {props.event.MinPrice}</p>
      </Modal.Content>
    </Modal>
  )
}

export default EventDetail;