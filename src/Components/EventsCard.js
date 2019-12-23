import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'

function EventsCard(props) {
  return (
    <Card color={"blue"}>
      <Card.Content textAlign={"center"}>
        <Card.Header>{props.event.EventName} in {props.event.VenueCity}</Card.Header>
          <Card.Description>
            {props.event.CalendarViewModel.MonthName} {props.event.CalendarViewModel.DayOfMonth}, {props.event.CalendarViewModel.Year}
          </Card.Description>
          <Button compact color="blue" active onClick={()=>props.toggleModal(props.event)}>
            See Details <Icon name="arrow circle right"/>
          </Button>
      </Card.Content>
    </Card>
  )
}

export default EventsCard;