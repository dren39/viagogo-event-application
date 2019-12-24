import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'

function EventsCard(props) {
  return (
    <Card color={"blue"}>
      <Card.Content textAlign={"center"}>
        <Card.Header>{props.event.EventName} in {props.event.VenueCity}</Card.Header>
          <Card.Description>
          <Icon name="calendar"/>{props.event.Date}
          </Card.Description>
          <Button compact color="olive" active onClick={()=>props.toggleModal(props.event)}>
            See Details <Icon name="arrow circle right"/>
          </Button>
      </Card.Content>
    </Card>
  )
}

export default EventsCard;